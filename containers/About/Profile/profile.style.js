import styled from 'styled-components'

export const AboutWrapper = styled.section`
  margin: 3rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProfileImage = styled.img`
  flex: 0 0 40%;
  max-width: 40%;
  padding: 1rem 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

export const ProfileContent = styled.div`
  dispaly: flex;
  flex: 0 0 60%;
  flex-direction: column;
  padding: 1rem 2rem;
`

export const Name = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0rem;
`

export const Position = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  margin: 0;
`
export const About = styled.p`
  text-align: justify;
`
