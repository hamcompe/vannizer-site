import { injectGlobal } from 'styled-components'
import colors from '../colors'

export default injectGlobal`
body {
  margin: 0;
  font-family: "Roboto","Helvetica Neue",Arial,sans-serif;
  color: ${colors.text};
}
a {
  text-decoration: none;
  :visited {
    color: inherit;
  }
}
::selection {
  background: #2880F2;
  color: #fff;
}
::-moz-selection {
  background: #2880F2;
  color: #fff;
}
`
