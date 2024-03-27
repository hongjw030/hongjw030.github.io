import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="luRUy8cnHtrBwO7Rf7CG8n_2XxiFcllahkzp01Kfurs"
        />
        <meta
          name="naver-site-verification"
          content="2d26f45a27332a5a9f6a61f2f2739d0c557e7a61"
        />
        <link rel="shortcut icon" href="/settings/favicon.ico.png" />

        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
