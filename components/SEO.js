import Head from 'next/head'

const SITE_URL = 'https://harshapj.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/Banner.jpg`

export default function SEO({ title, description, url, image }) {
  const siteTitle = 'Harsha PJ — Front-End Developer'
  const metaTitle = title ? `${title} • ${siteTitle}` : siteTitle
  const metaUrl = url || SITE_URL
  const metaImage = image || DEFAULT_IMAGE

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description || 'Experienced Front-end developer: React, TypeScript, Redux.'} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="author" content="Harsha PJ" />
      <meta name="robots" content="index,follow" />

      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description || ''} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD structured data for person and website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                name: 'Harsha PJ',
                jobTitle: 'Front-End Developer',
                email: 'mailto:harshapjawesome@gmail.com',
                url: SITE_URL,
                sameAs: ['https://www.linkedin.com/in/harsha-pj-b17325114/']
              },
              {
                '@type': 'WebSite',
                name: siteTitle,
                url: SITE_URL
              }
            ]
          })
        }}
      />
    </Head>
  )
}
