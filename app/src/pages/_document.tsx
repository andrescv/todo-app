import { Head, Html, Main, NextScript } from 'next/document';

const TODODocument: React.FC = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        crossOrigin="anonymous"
        href="https://fonts.gstatic.com"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Monda:wght@400;700&display=swap"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default TODODocument;
