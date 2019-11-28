import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { Star } from '@material-ui/icons'

const StyledRating = styled.div`
  position: relative;
  padding: 8px;
  height: auto;
  color: ${theme.colors.gray_alt};
  div {
    position: absolute;
    font-size: 13pt;
  }
  margin-bottom: 10px;
`

const WrapperNumber = styled.div`
  width: auto;
`

const WrapperRatingSvg = styled.div`
  width: auto;
  margin-left: 15px;
`

function Rating({ rating }) {
  const TmpStar = []
  for (let i = 0; i < 5; i += 1) {
    TmpStar.push(
      i < rating ? (
        <Star key={String(i)} color="secondary" fontSize="small" />
      ) : (
        <Star key={String(i)} fontSize="small" />
      ),
    )
  }
  return (
    <StyledRating>
      <WrapperNumber>{rating}</WrapperNumber>
      <WrapperRatingSvg> {TmpStar}</WrapperRatingSvg>
    </StyledRating>
  )
}

Rating.defaultProps = {
  rating: 5,
}

export default Rating
