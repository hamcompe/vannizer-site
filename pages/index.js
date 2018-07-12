import styled from 'styled-components'

import IndexLayout from '../layouts/IndexLayout'
import SocialGroup from '../organisms/Index/SocialGroup'
import AboutMe from '../organisms/Index/AboutMe'
import CheckoutButton from '../organisms/Index/CheckoutButton'
import HobbiesSection from '../organisms/Index/HobbiesSection'
import TalksSection from '../organisms/Index/TalksSection'
import breakpoints from '../breakpoints'

const IntroSection = styled.main`
  max-width: 1248px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 96px;
  margin-bottom: 8.75em;
  @media (max-width: ${breakpoints.m}) {
    margin-top: 48px;
  }
  @media (max-width: ${breakpoints.s}) {
    margin-top: 24px;
  }
`

const ResponsiveWrapper = styled.div`
  font-size: 18px;
  padding: 0 96px;
  @media (max-width: ${breakpoints.m}) {
    padding: 0 48px;
    font-size: 16px;
  }
  @media (max-width: ${breakpoints.s}) {
    padding: 0 24px;
  }
`

function Page() {
  return (
    <IndexLayout>
      <ResponsiveWrapper>
        <IntroSection>
          <AboutMe />
          <SocialGroup />
          <CheckoutButton />
        </IntroSection>
        <HobbiesSection />
        <TalksSection />
      </ResponsiveWrapper>
    </IndexLayout>
  )
}

export default Page
