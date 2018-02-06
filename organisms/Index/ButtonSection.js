import styled from 'styled-components'
import Button from '../../components/Button'

const ButtonSection = styled.div`
  display: flex;
  @media (max-width: 414px) {
    justify-content: center;
  }
`

function Section() {
  return (
    <ButtonSection>
      <a href="https://blog.vannizer.com/">
        <Button>CHECKOUT BLOG</Button>
      </a>
    </ButtonSection>
  )
}

export default Section
