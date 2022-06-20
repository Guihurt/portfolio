import type { NextPage } from 'next'
import Image from 'next/image';
import profilePic from '../public/images/profile.png'

const Home: NextPage = () => {
  return (
    <>
     <div className='flex flex-col lg:flex-row p-1 justify-center'>
       <div className='flex flex-col lg:w-1/3 justify-center items-center'>
        <Image src={profilePic} alt="Picture of Gabriel Guihurt"/>
        <p>This is me!</p>
       </div>
       
       <div className="flex flex-col lg:w-2/3 justify-center items-center">
        <h2 className='font-bold text-2xl'>Indie Game Developer - Junior Full-Stack Web Developer</h2>
       </div>
     </div>

      <footer>
        
      </footer>
    </>
  )
}

export default Home
