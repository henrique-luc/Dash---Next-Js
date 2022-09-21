import Head from "next/head";

const HeadTitle = ({ title }) => {
  return (
    <>
      <Head>
        <title>Dash - {title}</title>
        <meta name="keywords" content="shoes, style, dash"></meta>
        <meta
          name="description"
          content="Dash is a leading edge fashion footwear specialist, providing style conscious customers with innovative shoes"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
    </>
  );
};

export default HeadTitle;
