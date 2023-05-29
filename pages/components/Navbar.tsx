import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  const links = [
    {
      text: 'Nort VPN',
      path: '/#',
    },
    {
      text: 'Estructura 205',
      path: '/#',
    },
    {
      text: 'Pexels',
      path: '/#',
    }
  ]

  return (
    <nav className="flex w-full items-center justify-between">
      <a href="https://mariomolina-cloud.vercel.app/">
        <Image src="/assets/logo.svg" width="150" height="30" alt="Logo" />
      </a>
      <div className=" flex items-center gap-6 rounded-full border border-zinc-700 bg-zinc-800 px-5 py-3 text-base text-slate-200 shadow-md  hidden">
        {links.map(({ text, path }, index) => {
          return (
            <Link key={index} href={path}>
              <a className="cursor-pointer hover:text-blue-500">{text}</a>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
