import React from 'react'
import matter from 'gray-matter'
const glob = require('glob')
import ReactMarkdown from 'react-markdown'
import Header from 'containers/Blog/Header'
import Layout from 'containers/Layout'
import Container from 'common/src/components/UI/Container'
import Head from 'next/head'
import Footer from 'containers/Crypto/Footer'
import BetaSections from 'containers/Crypto/BetaSection'

const BlogTemplate = ({ frontmatter, markdownBody, siteTitle }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

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
        <ReactMarkdown source={markdownBody} />
      </Container>
      <BetaSections />
      <Footer />
    </Layout>
  )
}

export default BlogTemplate

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.md`)
  const data = matter(content.default)
  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogs = glob.sync('posts/**/*.md')
  const blogSlugs = blogs.map((file) => {
    file.split('/')[1].replace(/ /g, '-').slice(0, -3).trim()
  })
  const paths = blogSlugs.map((slug) => `/blog/${slug}`)
  return { paths, fallback: true }
}
