import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className='bg-slate-50'>
    <Navbar/>
      <div>Mario Molina</div>
      <Component {...pageProps} />
    <Footer/>
  </div>
  )
}

export default MyApp
