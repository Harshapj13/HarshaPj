import Head from 'next/head'

export default function SEO({ title, description, url, image }) {
  const siteTitle = 'Harsha PJ — Front-End Developer'
  const metaTitle = title ? `${title} • ${siteTitle}` : siteTitle
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description || 'Front-end developer: React, TypeScript, Redux.'} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="author" content="Harsha PJ" />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description || ''} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description || ''} />

      {/* Basic SEO helper: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Harsha PJ',
            jobTitle: 'Front-End Developer',
            email: 'harshapjawesome@gmail.com',
            url: url || 'https://example.com'
          })
        }}
      />
    </Head>
  )
}
