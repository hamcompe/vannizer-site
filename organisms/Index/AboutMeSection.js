import styled from 'styled-components'
import { rgba } from 'polished'
import colors from '../../colors'

const Container = styled.div`
  max-width: 500px;
`
const Headline = styled.div`
  font-size: 2.5em;
  font-weight: 700;
  line-height: 1;
  position: relative;
  margin-bottom: 1.2em;
  color: ${colors.black};

  ::after {
    content: '';
    position: absolute;
    background: ${colors.primary};
    bottom: -0.4em;
    left: 0;
    width: 1em;
    height: 0.18em;
  }
`
const Body = styled.div`
  font-size: 1em;
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 1.4em;
  color: ${colors.text};
`
const HeadlineWrapper = styled.div`
  @media (max-width: 414px) {
    display: flex;
    justify-content: center;
  }
`
const Link = styled.a`
  border-bottom: 1px solid ${colors.primary};
  transition: all 0.3s ease;
  outline: 1rem solid ${rgba(colors.gray, 0)};

  :hover {
    background: ${rgba(colors.gray, 0.2)};
    outline: 3px solid ${rgba(colors.gray, 0.2)};
    border-width: 3px;
    color: ${colors.black};
  }
`
const Emoji = styled.span`
  font-weight: 500;
`

function AboutMe() {
  return (
    <Container>
      <HeadlineWrapper>
        <Headline>Vannizer</Headline>
      </HeadlineWrapper>
      <Body>Hi Folk!</Body>
      <Body>I am a web developer passion to deliver happiness to people through websites.</Body>
      <Body>
        I love to build something fun and matter with great UI. A great product comes with joy and
        happiness, and it’s meaningless if not presented well.
      </Body>
      <Body>
        I interested in Functional Programming and Clean Code. Also{' '}
        <Link href="https://blog.vannizer.com">blog my development experience</Link> sometimes.
        <Emoji>¯\_(ツ)_/¯</Emoji>
      </Body>
    </Container>
  )
}

export default AboutMe
