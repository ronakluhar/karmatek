import React from 'react'
import Link from 'next/link'
import {
  BlogWrapper,
  BlogImage,
  BlogInfo,
  BlogTitle,
  BlogMeta,
  BlogContent,
} from './blogCard.style'

const BlogCard = ({ slug, frontmatter, markdownBody }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd()
  }

  return (
    <BlogWrapper>
      {frontmatter.image && (
        <BlogImage
          src={require(`../../../posts/assets/${frontmatter.image}`)}
          alt={frontmatter.title}
        />
      )}
      <BlogInfo>
        <Link href={`/blog/${slug}`}>
          <BlogTitle>{frontmatter.title}</BlogTitle>
        </Link>
        <BlogMeta>
          {frontmatter.author} | {reformatDate(frontmatter.date)}
        </BlogMeta>
        <BlogContent>{truncateSummary(markdownBody)}...</BlogContent>
        <Link href={`/blog/${slug}`}>Read More</Link>
      </BlogInfo>
    </BlogWrapper>
  )
}

export default BlogCard
