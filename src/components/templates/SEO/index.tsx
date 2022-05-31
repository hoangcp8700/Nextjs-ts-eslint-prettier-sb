import Head from "next/head";

const SEO: React.FC<SEOType> = ({ seoData, ogData, config }) => (
  <Head>
    <meta charSet='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <title>{seoData?.title}</title>
    <link rel='manifest' href='/manifest.json' />
    <link rel='apple-touch-icon' href='/apple-icon.png' />
    <meta name='description' content={seoData?.description} />
    <meta name='keywords' content={seoData?.keyword} />
    <meta name='theme-color' content={config?.themeColor || "#EF4444"} />
    <link
      href={config?.logo || "https://source.unsplash.com/random"}
      rel='icon'
      type='image/png'
      sizes='16x16'
      data-purpose='any maskable'
    />
    <link
      href={config?.logo || "https://source.unsplash.com/random"}
      rel='icon'
      type='image/png'
      sizes='32x32'
      data-purpose='any maskable'
    />

    {/* Twitter */}
    {/* <meta name='twitter:card' content='summary_large_image' key='twcard' />
      <meta name='twitter:creator' content={twitterHandle} key='twhandle' /> */}
    <meta name='twitter:title' content={seoData?.title} />
    <meta name='twitter:description' content={seoData?.description} />
    {seoData?.imgSrc && <meta name='twitter:image' content={seoData?.imgSrc} />}

    {/* Open Graph */}
    <meta
      property='og:site_name'
      content={ogData?.ogUrl || window.location.href}
      key='ogsitename'
    />
    <meta property='og:url' content={ogData?.ogUrl || window.location.href} key='ogurl' />
    {ogData?.ogImage && <meta property='og:image' content={ogData?.ogImage} />}
    {ogData?.ogTitle && <meta property='og:title' content={ogData?.ogTitle} />}
    {ogData?.ogDescription && <meta property='og:description' content={ogData?.ogDescription} />}
  </Head>
);

export default SEO;
