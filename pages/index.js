import styled from 'styled-components'

import IndexLayout from '../layouts/IndexLayout'
import SocialSection from '../organisms/Index/SocialSection'
import AboutMeSection from '../organisms/Index/AboutMeSection'
import ButtonSection from '../organisms/Index/ButtonSection'

const Content = styled.div`
  margin: 90px;
  font-size: 18px;
  @media (max-width: 762px) {
    margin: 48px;
    font-size: 16px;
  }
  @media (max-width: 414px) {
    margin: 24px;
  }
`

function Page() {
  return (
    <IndexLayout>
      <Content>
        <AboutMeSection />
        <SocialSection />
        <ButtonSection />
      </Content>
    </IndexLayout>
  )
}

export default Page
