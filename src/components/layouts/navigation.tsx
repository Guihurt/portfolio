import Link from 'next/link'
import styles from '../../styles/Navigation.module.css'
import React, { FC } from 'react'

const Navigation: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center'>
        <Link href="/">
          <h1 className={styles.title}>Gabriel O. Guihurt</h1>
        </Link>
      </div>
      <div className='flex  p-1'>
        <div className="flex flex-1 justify-center items-center space-x-3">
          <Link href="/about">
            <a>About Me</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          {process.env.NODE_ENV === 'development' ?
            <>
              <Link href="/wiki/">
                <a>Wiki</a>
              </Link>
              <Link href="/grailguides/">
                <a>Grail Guides</a>
              </Link>
            </>
            : null
          }
        </div>
      </div>

      <main className='min-w-full h-full flex flex-col justify-center'>
        {children}
      </main>
    </div>
  )
}

export default Navigation;