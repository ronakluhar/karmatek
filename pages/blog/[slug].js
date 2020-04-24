import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Header from 'containers/Blog/Header'
import Layout from 'containers/Layout'
import Container from 'common/src/components/UI/Container'
import Head from 'next/head'
import Footer from 'containers/Crypto/Footer'
import BetaSections from 'containers/Crypto/BetaSection'
import { DiscussionEmbed } from 'disqus-react'
import Router from 'next/router'

const BlogTemplate = ({ data, content }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }
  const frontmatter = data

  if (!frontmatter) return <></>
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <Header
        title={frontmatter.title}
        author={frontmatter.author}
        date={reformatDate(frontmatter.date)}
      />
      <Container>
        <ReactMarkdown source={content} />
        <DiscussionEmbed
          shortname="test"
          config={{
            url: `/blog/${Router.query.slug}`,
            identifier: frontmatter.title,
            title: frontmatter.title,
          }}
        />
      </Container>
      <BetaSections />
      <Footer />
    </Layout>
  )
}

export default BlogTemplate

BlogTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)

  return { ...data }
}
