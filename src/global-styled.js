import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import BodyComponent from './Body'
import theme from './common/theme'

const WrapperGlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Abel');
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
    font-size: 17px;
    background-color: ${theme.colors.white_2};
  }
`

export default function GlobalStyled({ children }) {
  return (
    <ThemeProvider>
      <React.Fragment>
        <WrapperGlobalStyled />
        <BodyComponent>{children}</BodyComponent>
      </React.Fragment>
    </ThemeProvider>
  )
}
