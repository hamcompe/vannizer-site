import styled from 'styled-components'
import colors from '../../colors'

const SocialSection = styled.div`
  display: flex;
  margin: 2.6em 0;
  @media (max-width: 414px) {
    justify-content: space-around;
  }
`
const IconLink = styled.a`
  margin-right: 4em;
  color: ${colors.text};
  transition: all 0.3s ease;
  :hover {
    color: ${colors.primary};
    transform: scale(1.3);
  }
  @media (max-width: 414px) {
    margin: 0;
  }
`

function Section() {
  return (
    <SocialSection>
      <IconLink href="https://github.com/vannizer">
        <i className="fab fa-2x fa-github" />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/pallop">
        <i className="fab fa-2x fa-linkedin-in" />
      </IconLink>
      <IconLink href="http://blog.vannizer.com">
        <i className="fab fa-2x fa-medium-m" />
      </IconLink>
    </SocialSection>
  )
}

export default Section
