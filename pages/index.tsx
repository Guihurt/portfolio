import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div className="flex">
        <div className='flex flex-col w-1/3 bg-aqua-300'>
          <p>Photo</p>
        </div>
        <div className='flex flex-col w-2/3 bg-blue-300'>
          <p>Resume</p>
        </div>
      </div>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
