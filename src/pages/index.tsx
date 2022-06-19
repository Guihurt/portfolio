import type { NextPage } from 'next'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import profilePic from '../public/images/profile.png'

const Home: NextPage = () => {
  return (
    <>
     <div className='flex flex-col lg:flex-row p-1 bg-red-300 justify-center'>
       <div className='flex flex-col lg:w-1/3 justify-center items-center'>
        <Image src={profilePic}/>
        <h2>Puertorican-Colombian</h2>
       </div>
       <div className="flex flex-col lg:w-2/3 justify-center items-center">
        <p>There</p>
        <p>hello friends</p>
       </div>
     </div>

      <footer className={styles.footer}>
        
      </footer>
    </>
  )
}

export default Home
