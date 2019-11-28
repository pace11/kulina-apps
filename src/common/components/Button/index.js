import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};
  color: ${theme.colors.white_2};
  font-size: ${props => props.fontSize};
  font-weight: 600;
  height: ${props => props.height};
  margin: 24px 16px 0px 0px;
  outline: none;
  padding: ${props => props.padding};
  text-transform: uppercase;
  :active {
    opacity: 0.7;
  }
  :hover {
    cursor: pointer;
  }
`

function Button({
  backgroundColor,
  fontSize,
  padding,
  height,
  children,
  onClick,
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      padding={padding}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  backgroundColor: theme.colors.pink,
  fontSize: '12pt',
  height: '40px',
  padding: '0.1rem 1.5rem',
  onClick: null,
}

export default Button
