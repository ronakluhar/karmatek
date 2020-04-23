import React from 'react'
import { BannerWrapper, BannerHeading } from './banner.style'
import Box from 'common/src/components/Box'
import Container from 'common/src/components/UI/Container'

const Banner = ({ row, col, title }) => {
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <BannerHeading>{title}</BannerHeading>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  )
}

export default Banner
