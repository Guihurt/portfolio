import Link from 'next/link'
import styles from '../../styles/Navigation.module.css'

export default function Navigation({ children }) {
  return (
    <div className='bg-pink-300 p-1'>
      <div className='flex flex-col justify-center items-center bg-gray-300'>
        <Link href="/">
          <h1 className={styles.title}>GOG</h1>
        </Link>
        <div>
          <p>Gabriel O. Guihurt</p>
        </div>
      </div>
      <div className='flex bg-blue-300 p-1'>
        <div className="flex bg-green-300 flex-1 justify-center items-center space-x-3">
          <Link href="/about">
            <a>About Me</a>
          </Link>
          <Link href="/wiki/">
            <a>Wiki</a>
          </Link>
          <Link href="/grailguides/">
            <a>Grail Guides</a>
          </Link>
        </div>
      </div>

      <main className='w-full h-full bg-teal-300'>
        {children}
      </main>
    </div>
  )
}