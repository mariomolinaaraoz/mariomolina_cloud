import Image from 'next/image'
import { Card, Button, Input, Text, Modal, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export async function getServerSideProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin
    .from('205')
    .select('*')
    .order('id', { ascending: false })

  return {
    props: {
      images: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  imageSrc: string
  plano: string
  elemento: string
  href: string
}

export default function Gallery({ images }: { images: Image[] }) {
  const [searchTerm, setSearchTerm] = useState('')

  // Filtrar los datos de la tabla '205' basados en el término de búsqueda
  const filteredImages = images.filter(
    (image) =>
      image.plano.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.elemento.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearchChange: React.ChangeEventHandler | undefined = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value)
  }

  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  const openModal = (image: Image) => {
    setSelectedImage(image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
    resetScroll()
  }

  // Función para restablecer el scroll al cerrar el modal
  const resetScroll = () => {
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="mx-auto max-w-2xl py-16 px-2 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Card className="grid place-items-center" variant="flat">
      <Card.Body>
        <Text 
          h2 
          color='primary'
          className='tracking-wide p-0 m-0'>
          ESTRUCTURA 205 - SECTOR A
        </Text>
      </Card.Body>
    </Card>      
      <div className="mt-10 flex max-w-2xl flex-col gap-5">
        <Input
          className="w-full"
          size="xl"
          clearable
          bordered
          labelPlaceholder="Filtrar"
          type="text"
          onChange={handleSearchChange}
        />
      </div>
      <Spacer y={2} />
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {filteredImages.map((image) => (
          <BlurImage
            key={image.id}
            image={image}
            openModal={() => openModal(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <Modal
          css={{
            height: '90vh',            
            backgroundColor: 'rgba(0, 0, 0, 0.4)', // Color transparente con opacidad
            backdropFilter: 'blur(8px)', // Efecto de desenfoque
            padding:0
          }}
          scroll
          width="w-full"
          open={isModalOpen}
          closeButton
          onClose={closeModal}
          className="flex"
        >
          <Modal.Header className='p-0'>
            <Text 
              h3 
              color='white'
            >
              {selectedImage.plano}
            </Text>
          </Modal.Header>
          <Modal.Body className='p-0'>
            <iframe
              src={selectedImage.href} // Reemplaza con la ruta a tu archivo PDF
              className="h-full w-full"
              title="PDF Viewer"
            />
          </Modal.Body>
          <Modal.Footer css={{ height: '5vh', marginTop: 0, paddingTop: 0 }}>
            <Button
              css={{ marginTop: 1, paddingTop: 0 }}
              size="sm"
              color="secondary"
              onPress={closeModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  )
}

function BlurImage({
  image,
  openModal,
}: {
  image: Image
  openModal: () => void
}) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="group" onClick={openModal}>
      <div
        className="
          aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg 
          object-cover 
          object-center drop-shadow-[5px_5px_7px_rgba(0,0,0.2)]
          transition-all hover:scale-105
          xl:aspect-w-7 xl:aspect-h-8"
      >
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <Text h4 className="mt-3 mb-0" color="secondary">
        {image.plano}
      </Text>
      <Text h5 className="mt-0" color="primary">
        {image.elemento}
      </Text>
    </div>
  )
}
