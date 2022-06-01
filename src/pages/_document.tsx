import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/apple-icon.png' />
          <meta name='theme-color' content='#EF4444' />
          <link
            href='https://source.unsplash.com/random'
            rel='icon'
            type='image/png'
            sizes='16x16'
            data-purpose='any maskable'
          />
          <link
            href='https://source.unsplash.com/random'
            rel='icon'
            type='image/png'
            sizes='32x32'
            data-purpose='any maskable'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
