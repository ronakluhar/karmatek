import React from 'react'
import Head from 'next/head'
import LogoImage from 'common/src/assets/image/saasModern/logo.png'

const SEO = ({ blog, postData }) => {
  let title
  let description
  let image
  if (blog) {
    title = postData.title
    description = postData.description
    image = postData.image
  } else {
    title = 'Karmatek'
    description = 'Karmatek'
    image = LogoImage
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#ec5555" />
      <meta name="image" content={image} />
      {/* OG Meta */}
      <meta property="og:type" content={blog ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />
      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />
      {blog && (
        <meta
          name="article:published_time"
          content={postData.first_publication_date}
        />
      )}
    </Head>
  )
}

export default SEO
