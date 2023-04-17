import type { AppProps } from 'next/app'
import { GlobalCss } from '@/styles/global/GlobalCss'

GlobalCss();
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
