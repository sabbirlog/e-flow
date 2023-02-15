import QueryProvider from '@/providers/Query'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Component {...pageProps} />
    </QueryProvider>
  )
}
