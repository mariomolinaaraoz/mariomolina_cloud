import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className='bg-gray-50'>
    <Navbar/>
    <div>Mario Molina</div>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp
