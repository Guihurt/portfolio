import Link from 'next/link'

export default function Navigation({ children }) {
  return (
    <div>
      <div className='flex bg-blue-300 p-1'>
        <div className='flex flex-initial bg-red-300 p-1'>
          <Link href="/">
            <a>GOG</a>
          </Link>
        </div>
        <div className="flex bg-green-300 flex-1 justify-center items-center space-x-3">
          <Link href="/about">
            <a>About Me</a>
          </Link>
          <Link href="/wiki/dashboard">
            <a>Wiki</a>
          </Link>
        </div>
      </div>

      <main>{children}</main>
    </div>
  )
}