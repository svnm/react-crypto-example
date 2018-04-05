import {fonts} from './fonts'
import {colors} from './colors'
import {breakpoints} from './breakpoints'
import {injectGlobal} from 'styled-components'

injectGlobal`
  ::selection {
    background: ${colors.$light_yellow};
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: ${fonts.$sans};
    line-height: 1.4;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

  li, p, label {
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${fonts.$sans};
    font-weight: normal;
    margin: 0 0 24px;
  }
  h1 {
    font-size: 30px;
    line-height: 1.3;
  }
  h2 {
    font-size: 24px;
    line-height: 1.3;
  }
  h3 {
    font-size: 20px;
    line-height: 1.3;
  }
`

export const mainWrapper = () => {
  return `
    @media (max-width: ${breakpoints.$break_small}) {
      margin-left: 0;
    }

    .home-image {
      width: 90%;
      display: block;
      max-width: 800px;
    }
    .logo-icon {
      display: block;
      margin-bottom: 50px;
      margin-left: 4px;
      width: 200px;
    }
    .loader-icon {
      display: block;
      margin-left: 50px;
      margin-top: 100px;
    }
    .back-icon {
      display: block;
      margin-left: 5px;
      margin-bottom: 20px;
    }
    svg {
      margin-right: 10px;
      vertical-align: sub;
    }
  `
}
