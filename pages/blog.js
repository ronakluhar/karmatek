import React from 'react'
import Layout from '../containers/Layout'
import Head from 'next/head'
import Banner from '../containers/Banner'
import Footer from 'containers/Crypto/Footer'
import BetaSections from 'containers/Crypto/BetaSection'
import BlogCard from 'containers/Blog/BlogCard'
import Container from 'common/src/components/UI/Container'
import matter from 'gray-matter'

const Blog = ({ allBlogs }) => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <Banner title="Blog" />
      <Container>
        {allBlogs.map((post) => {
          return (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              frontmatter={post.frontmatter}
              markdownBody={post.markdownBody}
            />
          )
        })}
      </Container>
      <BetaSections />
      <Footer />
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))
  return {
    props: {
      allBlogs: posts,
    },
  }
}

export default Blog
