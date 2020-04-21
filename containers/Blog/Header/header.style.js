import styled from 'styled-components'
import BannerBG from 'common/src/assets/image/saasModern/banner-texture.png'

export const HeaderWrapper = styled.section`
  padding: 150px 0 50px 0;
  background-image: url(${BannerBG}),
    linear-gradient(35deg, rgb(116, 107, 253) 0%, rgb(110, 106, 252) 100%);
  background-size: cover;
  background-position: top center;
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`
export const Heading = styled.section`
  font-size: 2rem;
  font-weight: 700;
  // text-align: center;
  color: #ffffff;
`

export const MetaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
`

export const Author = styled.div`
  color: #ffffff;
  margin-right: 1rem;
`

export const Date = styled.div`
  color: #ffffff;
`
