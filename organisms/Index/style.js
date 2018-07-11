import styled from 'styled-components'
import breakpoints from '../../breakpoints'
import colors from '../../colors'

const sectionWidth = '1248px'
const imageWidth = '800px'
const detailWidth = '420px'

export const Section = styled.section`
  max-width: ${sectionWidth};
  width: 100%;
  margin: 0 auto;
  margin-bottom: 120px;
`
export const ImageWrapper = styled.figure`
  @media (max-width: ${breakpoints.l}) {
    margin: 0;
  }
`
export const Image = styled.img`
  display: block;
  width: 100%;
  box-shadow: 0px 35px 40px -20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover:active {
    transform: scale(0.97, 0.97);
  }
  &:hover {
    transform: translate(0, -5px);
    box-shadow: 0px 40px 60px -20px rgba(0, 0, 0, 0.2);
  }
`
export const SectionHeader = styled.h2`
  position: relative;
  width: fit-content;
  font-size: 2.5em;
  color: ${colors.black};
  text-align: ${({ align }) => align};
  margin: 0;
  margin-bottom: 1em;

  &::after {
    content: '';
    position: absolute;
    background: ${colors.primary};
    top: -0.1em;
    right: -0.6em;
    width: 0.5em;
    height: 0.5em;
  }
`
export const ImageCaption = styled.figcaption`
  margin-top: 32px;
  text-align: center;
  font-size: 1em;
`
export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 90px;

  @media (max-width: ${breakpoints.l}) {
    flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  }
`
export const ArticleTextWrapper = styled.div`
  padding-top: 40px;
  max-width: ${detailWidth};

  @media (max-width: ${breakpoints.l}) {
    padding-top: 0;
    margin-bottom: 24px;
  }
`
export const ArticleImageWrapper = styled.div`
  max-width: ${imageWidth};
`

export const ArticleHeader = styled.h3`
  color: ${colors.text};
  font-size: 1.5em;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.3em;
`
export const ArticleDescription = styled.p`
  font-size: 1em;
  line-height: 1.5;
`
export const ArticleSubHeader = styled.h4`
  font-size: 1.125em;
  font-weight: 400;
  color: ${colors.lightText};
  margin-top: 0;
  margin-bottom: 2em;
`
