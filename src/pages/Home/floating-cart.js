import React from 'react'
import styled from 'styled-components'
import { ShoppingCart, ArrowForwardIos } from '@material-ui/icons'
import Currency from '../../lib/currency'
import theme from '../../common/theme'

const StyledFloatingCart = styled.div`
  display: ${props => (props.count > 0 ? 'flex' : 'none')};
  justify-content: space-between;
  flex-direction: row;
  margin: 5px;
  border-radius: 5px;
  position: fixed;
  height: 50px;
  background-color: ${theme.colors.brown};
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${theme.zIndex.cart};
`

const StyledFloatLeft = styled.div`
  padding: 0rem 0.5rem;
  height: auto;
  width: auto;
  p {
    color: ${theme.colors.white_2};
    line-height: 0;
    margin-bottom: 5px;
    font-size: 15pt;
  }
  small {
    color: ${theme.colors.white_1};
  }
`

const StyledFloatRight = styled.div`
  padding: 0.625rem;
  height: auto;
  width: auto;
`

function FloatingCart({ item, count }) {
  const RenderPrice = ({ data }) => {
    let SumPrice = 0
    for (let i = 0; i < data.length; i += 1) {
      SumPrice += data[i].price
    }
    SumPrice += 15000
    return (
      <p>
        {data.length} Items | {Currency('Rp', `${SumPrice}`)}
      </p>
    )
  }

  return (
    <StyledFloatingCart count={item.length}>
      <StyledFloatLeft>
        <RenderPrice data={item} />
        <small>Termasuk ongkos kirim</small>
      </StyledFloatLeft>
      <StyledFloatRight>
        <ShoppingCart style={{ color: `${theme.colors.white_2}` }} />
        <ArrowForwardIos
          style={{ color: `${theme.colors.white_2}` }}
        />
      </StyledFloatRight>
    </StyledFloatingCart>
  )
}

export default FloatingCart
