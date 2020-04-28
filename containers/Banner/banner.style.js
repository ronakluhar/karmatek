import styled from 'styled-components'
import BannerBG from 'common/src/assets/image/saasModern/banner-texture.png'

export const BannerWrapper = styled.section`
  padding: 150px 0 50px 0;
  background-image: url(${BannerBG}),
    linear-gradient(35deg, rgb(116, 107, 253) 0%, rgb(110, 106, 252) 100%);
  background-size: cover;
  background-position: top center;
  @media (max-width: 768px) {
    padding: 8rem 0 1.5rem 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`
export const BannerHeading = styled.section`
  font-size: 2rem;
  font-weight: 700;
  // text-align: center;
  color: #ffffff;
`
