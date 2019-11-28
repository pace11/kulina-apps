import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'
import Header from '../../common/components/Header'
import Card from '../../common/components/Card'
import FloatingCart from './floating-cart'
import FoodDataMock from '../../__json__/food.json'

const StyledBody = styled.div`
  z-index: ${theme.zIndex.body};
`

const StyledContainer = styled.div`
  margin-top: 70px;
  margin-bottom: ${props => (props.count > 0 ? '60px' : '0px')};
`

export default function Home({ count }) {
  const [cart, setCart] = React.useState([])
  const { data } = FoodDataMock
  const GetId = e => {
    const newStateArray = { id: e.id, name: e.name, price: e.price }
    setCart([...cart, newStateArray])
  }

  return (
    <React.Fragment>
      <StyledBody>
        <Header />
        <StyledContainer count={cart.length}>
          {data.map(item => (
            <Card
              key={String(item.id)}
              imageUrl={item.image_url}
              rating={item.rating}
              name={item.name}
              price={item.price}
              providedBy={item.provided_by}
              onClick={() => GetId(item)}
            />
          ))}
        </StyledContainer>
        <FloatingCart item={cart} />
      </StyledBody>
    </React.Fragment>
  )
}
