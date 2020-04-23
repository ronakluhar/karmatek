import styled from 'styled-components'

export const BlogWrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const BlogImage = styled.img`
  width: 20rem;
  margin-right: 2rem;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

export const BlogTitle = styled.a`
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
`

export const BlogInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const BlogMeta = styled.div`
  display: flex;
  flex-direction: row;
`

export const BlogContent = styled.div`
  margin-bottom: 1rem;
`
