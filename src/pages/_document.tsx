import { GlobalStyle } from '@/styles/global'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <style id="stitches" dangerouslySetInnerHTML={{__html: GlobalStyle.getCssText() }}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
