import React from 'react'
import styled from 'styled-components'
import { ArrowBack } from '@material-ui/icons'
import theme from '../../theme'

const StyledHeader = styled.div`
  display: flex;
  top: 0;
  flex-direction: row;
  width: 100%;
  z-index: 999;
  position: fixed;
  background-color: ${theme.colors.pink};
  height: 60px;
`

const StyledCalendar = styled(StyledHeader)`
  background-color: ${theme.colors.gray_alt};
  margin-top: 60px;
`

const StyledItem = styled.div`
  padding: 0rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: auto;
`

function Header() {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledItem>
          <ArrowBack />
        </StyledItem>
      </StyledHeader>
      <StyledCalendar>
        <StyledItem>
          <ArrowBack />
        </StyledItem>
      </StyledCalendar>
    </React.Fragment>
  )
}

export default Header
