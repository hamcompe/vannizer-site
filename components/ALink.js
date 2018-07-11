import styled from 'styled-components'
import { rgba } from 'polished'
import colors from '../colors'

const Link = styled.a`
  color: ${colors.text};
  border-bottom: 1px solid ${colors.primary};
  transition: all 0.3s ease;
  outline: 1rem solid ${rgba(colors.grey, 0)};

  :hover {
    background: ${rgba(colors.grey, 0.2)};
    outline: 3px solid ${rgba(colors.grey, 0.2)};
    border-width: 3px;
    color: ${colors.black};
  }
`

export default Link
