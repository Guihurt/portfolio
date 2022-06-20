import '../styles/global.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import Navigation from '../components/layouts/navigation'
import Head from 'next/head'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Head>
          <title>Gabriel Guihurt</title>
          <meta name="description" content="Portfolio site for Gabriel O. Guihurt" />
          <meta charSet='utf-8' />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
