import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { Star } from '@material-ui/icons'

const StyledRating = styled.div`
  padding: 8px;
  height: auto;
  color: ${theme.colors.gray_alt};
  span {
    font-size: 13pt;
    display: inline-block;
    margin-bottom: 10px;
  }
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
      <span>{rating}</span> {TmpStar}
    </StyledRating>
  )
}

Rating.defaultProps = {
  rating: 5,
}

export default Rating
