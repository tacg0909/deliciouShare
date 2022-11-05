import { Head, Html, Main, NextScript } from "next/document"
import React from "react"

const Document = () => {
  return (
    <Html lang="ja">
      <Head prefix="og: https://ogp.me/ns# website: https://ogp.me/ns/website# article: https://ogp.me/ns/article#">
        <link rel="manifest" href="manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
