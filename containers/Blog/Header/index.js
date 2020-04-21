import React from 'react'
import {
  HeaderWrapper,
  Heading,
  MetaWrapper,
  Author,
  Date,
} from './header.style'
import Box from 'common/src/components/Box'
import Container from 'common/src/components/UI/Container'

const Header = ({ row, col, title, author, date }) => {
  return (
    <HeaderWrapper id="banner_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading>{title}</Heading>
            <MetaWrapper>
              <Author>By: {author}</Author>
              <Date>Posted on: {date}</Date>
            </MetaWrapper>
          </Box>
        </Box>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
