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
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            rel="stylesheet"
          />
          <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />
        </Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
