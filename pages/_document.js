import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import '../css/main'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Vannizer</title>
          {this.props.styleTags}
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Open+Sans"
          />
          <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}