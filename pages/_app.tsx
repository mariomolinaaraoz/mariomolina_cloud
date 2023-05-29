import Head from 'next/head'
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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:url" content="https://mariomolinaaraoz.store" />
        <meta property="og:title" content="Mario Molina - Cloud Services" />
        <meta property="og:locale" content="es-Argentina" />
        <meta
          property="og:description"
          content="Cloud storage: security, accessibility, unlimited storage, collaboration, data protection, synchronization and freeing up space."
        />
        <meta
          property="og:image"
          content="https://fvvtqpkgirpnlmiemgcn.supabase.co/storage/v1/object/sign/logo/mario_molina.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvL21hcmlvX21vbGluYS5wbmciLCJpYXQiOjE2NzAwOTMxOTUsImV4cCI6MTk4NTQ1MzE5NX0.Vvz2TljhLPuPpBiyNBIXgOUs98PsJr921WIKX-Yiess"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="mario_molina logo" />

        <link rel="icon" href="/favicon.ico" />
        <title>Mario Molina - Cloud Services</title>
      </Head>
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
                'Cloud storage: security, accessibility, unlimited storage, collaboration, data protection, synchronization and freeing up space.'
              }
            </p>
            <Social />
          </div>
          <Images />
        </div>
        <Component {...pageProps} />
        <Footer />
        <FloatingButton />
      </div>
    </>
  )
}

export default MyApp
