import Head from "next/head";


function SEO({ seoData, ogData }: SEOType) {
  // customize meta properties
  // you can pass them as an argument like title in case you want to change for each page
  const description = process.env.siteDescription;
  const keywords = process.env.siteKeywords;
  const siteURL = process.env.siteUrl;
  const {twitterHandle} = process.env;
  const imagePreview = `${siteURL}/${process.env.siteImagePreviewUrl}`;

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <title>{seoData.title}</title>
      <meta name='description' content={seoData.description} />
      <meta name='keywords' content={seoData.keywords} />
      
      {/* Twitter */}
      <!--  <meta name='twitter:card' content='summary_large_image' key='twcard' />
      <meta name='twitter:creator' content={twitterHandle} key='twhandle' /> -->
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData?.description} />
      {
        seoData?.imgSrc && (
          <meta name="twitter:image" content={seoData?.imgSrc} />
        )
      }
      
      {/* Open Graph */}
      <meta property='og:site_name' content={ogData?.ogUrl || window.location.href} key='ogsitename' />
      <meta property="og:url" content={ogData?.ogUrl || window.location.href}  key='ogurl' />
      {
        ogData?.ogImage && (
          <meta property="og:image" content={ogData?.ogImage} />
        )
      }
      {
        ogData?.ogTitle && (
          <meta property="og:title" content={ogData?.ogTitle} />
        )
      }
      {
        ogData?.ogDescription && (
          <meta property="og:description" content={ogData?.ogDescription} />
        )
      }
      
      <link rel='manifest' href='/manifest.json' />
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
      <link rel='apple-touch-icon' href='/apple-icon.png' />
      <meta name='theme-color' content='#EF4444' />
    </Head>
  );
}

export default SEO;
