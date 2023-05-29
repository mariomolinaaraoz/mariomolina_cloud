import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import Images from './components/Images'
import Social from './components/Social'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-slate-200">
        <div className="relative mx-auto max-w-7xl p-2 sm:px-24">
          <Navbar />
          <div className="mt-20 flex max-w-2xl flex-col gap-5">
            <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
              Your data,
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
              your memories and your work,
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl">
              safe and secure.
            </h1>
            <p className=" text-base text-zinc-600">
              {
                "Cloud storage: security, accessibility, unlimited storage, collaboration, data protection, synchronization and freeing up space."
              }
            </p>
            <Social />
          </div>
          <Images />
        </div>
        <Component {...pageProps} />
        <Footer />
        <FloatingButton/>
      </div>
    </>
  )
}

export default MyApp
