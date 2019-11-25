import React from 'react'
import styled from 'styled-components'
import Currency from '../../../lib/currency'
import theme from '../../theme'

const StyledCard = styled.div`
  background: ${theme.colors.white_2};
  height: auto;
  width: auto;
  margin: 8px;
  border-radius: 5px;
  box-shadow: 2px 2px 30px -20px #000000;
`

const StyledImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  width: 100%;
  height: 200px;
  border-radius: 5px 5px 0px 0px;
  background-color: grey;
  overflow: hidden;
`

const StyledRating = styled.div`
  padding: 8px;
  height: auto;
  font-size: 12pt;
  color: ${theme.colors.gray_alt};
`

const StyledTitle = styled.div`
  padding: 8px;
  height: auto;
  font-size: 17pt;
  font-weight: bold;
  color: ${theme.colors.gray_dark};
`

const StyledProvided = styled.div`
  padding: 8px;
  height: auto;
  font-size: 11pt;
  color: ${theme.colors.gray_alt};
`

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const StyledPrice = styled.h3`
  padding: 8px;
  color: ${theme.colors.gray_alt};
`

const StyledButton = styled.button`
  border: none;
  outline: none;
  margin: 24px 16px 0px 0px;
  padding: 0.1rem 1.5rem;
  height: 40px;
  color: ${theme.colors.white_2};
  text-transform: uppercase;
  font-size: 12pt;
  border-radius: 5px;
  background-color: ${theme.colors.pink};
  :active {
    opacity: 0.7;
  }
  :hover {
    cursor: pointer;
  }
`

function Card({
  imageUrl,
  rating,
  name,
  providedBy,
  typeFood,
  price,
}) {
  return (
    <StyledCard>
      <StyledImage imageUrl={imageUrl} />
      <StyledRating>{rating}</StyledRating>
      <StyledTitle>{name}</StyledTitle>
      <StyledProvided>
        by {providedBy} . Uptown {typeFood}{' '}
      </StyledProvided>
      <StyledFooter>
        <StyledPrice>{Currency('Rp', `${price}`)}</StyledPrice>
        <StyledButton>Add +</StyledButton>
      </StyledFooter>
    </StyledCard>
  )
}

Card.defaultProps = {
  imageUrl: 'https://loremflickr.com/320/240?random=1',
  name: 'Roasted Chicken with Scrumble Eeg',
  rating: 4,
  providedBy: 'Kulina',
  typeFood: 'Lunch',
  price: 50000,
}

export default Card
