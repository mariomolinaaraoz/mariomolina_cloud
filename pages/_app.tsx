import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { darkTheme, lightTheme } from '../themes'
import type { AppProps } from 'next/app'

import Home from './components/Home'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
      <Head>
        {/* Favicon para modo claro */}
        <link rel="icon" href="/favicon-light.io" />

        {/* Favicon para modo oscuro */}
        <link rel="icon" href="/favicon-dark.io" media="(prefers-color-scheme: dark)" />

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

        <meta property="og:url" content="https://mariomolinaaraoz.com.ar" />
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
        <Home />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
        <FloatingButton />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
