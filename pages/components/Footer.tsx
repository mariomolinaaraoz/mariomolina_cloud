import Image from 'next/image'

const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 z-10 w-full bg-slate-800">
      <div className="mx-auto px-6 flex max-w-[1240px] items-center justify-between pt-1 text-white">
        <h1 className="mb-2 mr-2 text-xs text-gray-500">
          Todos los derechos reservados
        </h1>
        <div className='flex items-center'>
          <h1 className="mb-2 mr-0 text-xs text-gray-500 w-20">Designed by </h1>
          <a href="https://www.mariomolinaaraoz.com.ar/">
            <Image
              className=""
              src="/assets/brand.svg"
              width="90"
              height="30"
              alt="Logo"
            />
          </a>
          <h1 className="mb-2 ml-1 text-xs text-gray-500"> 2022 </h1>
        </div>
      </div>
    </div>
  )
}
export default Footer
