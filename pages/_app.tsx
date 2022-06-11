import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/layouts/navigation'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gabriel Guihurt</title>
        <meta name="description" content="Portfolio site for Gabriel O. Guihurt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </>
  )
}

export default MyApp
