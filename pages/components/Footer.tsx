import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="fixed left-0 bottom-0 z-10 w-full bg-slate-800 duration-300 ease-in">
      <div className="mr-4 flex max-w-[1240px] items-center justify-end text-white">
        <h1 className="mr-2 text-sm">Designed by </h1>
        <Link href="/">
          <a>
            <Image className="" src="/assets/brand.svg" width="80" height="30" alt="Logo" />
          </a>
        </Link>
      </div>
    </div>
  )
}
export default Footer
