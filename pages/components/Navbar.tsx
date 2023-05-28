import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-sky-700 fixed left-0 top-0 w-full z-10 drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-white'>
      <Link href="/">
            <a>
              <Image src="/assets/logo.svg" width="140" height="30" alt="Logo" />
            </a>
          </Link>
        <ul  className='hidden sm:flex'>
          <li className='p-1'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-1'>
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li className='p-1'>
            <Link href='/work'>Work</Link>
          </li>
          <li className='p-1'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
