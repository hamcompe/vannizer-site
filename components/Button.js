import styled from 'styled-components'
import { darken, lighten, rgba } from 'polished'
import colors from '../colors'

const Button = styled.button`
  font-family: Roboto;
  font-weight: 500;
  padding: 13px 35px;
  font-size: 1em;
  border-radius: 25px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  background-color: ${colors.primary};
  border: 0;
  box-shadow: 0 3px 15px 0 ${rgba(colors.primary, 0.4)};
  color: #fff;

  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${lighten(0.05, colors.primary)};
    box-shadow: 0 10px 20px 0 ${rgba(colors.primary, 0.3)};
    transform: translate(0px, -4px);
  }
  &:active {
    background-color: ${darken(0.05, colors.primary)};
    box-shadow: 0 3px 15px 0 ${rgba(colors.primary, 0.4)};
    transform: translate(0px, 0px);
  }
  &:disabled {
    background-color: ${colors.gray};
    box-shadow: none;
    cursor: not-allowed;
    transform: translate(0px);
  }
`

export default Button
