import styled from 'styled-components'
import colors from '../../colors'

const Container = styled.div`
  max-width: 500px;
`
const Headline = styled.div`
  font-size: 2.5em;
  font-weight: 900;
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

function AboutMe() {
  return (
    <Container>
      <HeadlineWrapper>
        <Headline>Vannizer</Headline>
      </HeadlineWrapper>
      <Body>Hi Folk!</Body>
      <Body>
        I am a web developer passion to bring great experience to people through websites.
      </Body>
      <Body>
        I am a software engineer who fall in love with web development. Love to build fun stuff with
        great interface. Passion in Functional Programming and Clean Code.
      </Body>
      <Body>I also blog my development experience.</Body>
    </Container>
  )
}

export default AboutMe
