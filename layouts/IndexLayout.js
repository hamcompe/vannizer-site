import { Fragment } from 'react'
import styled from 'styled-components'
import CurveDecoratorSVG from '../components/CurveDecoratorSVG'

const DecoratorWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  z-index: -1;
`
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`

function Layout({ children }) {
  return (
    <Fragment>
      <DecoratorWrapper>
        <CurveDecoratorSVG />
      </DecoratorWrapper>
      <PageLayout>{children}</PageLayout>
    </Fragment>
  )
}

export default Layout
