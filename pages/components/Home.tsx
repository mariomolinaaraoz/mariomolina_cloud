import { Text } from "@nextui-org/react"
import Navbar from './Navbar'
import Images from './Images'

export const Home = () => {
   return (    
       <div className="relative mx-auto max-w-7xl p-2 sm:px-24">
      <Navbar />
      <div className="mt-20 flex max-w-2xl flex-col gap-5">
        <Text
          h1 
          className="font-semibold tracking-wide"
          color='primary'
        >
          Your data, your memories and your work, safe and secure.
        </Text>        
        <Text
          h4
          className="tracking-normal"
          color='secondary'
        >
           'Cloud storage: security, accessibility, unlimited storage, collaboration, data protection, synchronization'
        </Text>
      </div>
      <Images />
    </div>
  )
}
export default Home
