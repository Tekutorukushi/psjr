import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
          <Html lang="ru">
              <Head>
                  <title>psjr</title>
                  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
              <body>
              <Main />
              <NextScript />
              </body>
          </Html>
        )
    }
}

export default MyDocument
