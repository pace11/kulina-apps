import React from 'react'
import styled from 'styled-components'
import Header from '../../common/components/Header'
import Card from '../../common/components/Card'
import FoodDataMock from '../../__json__/food.json'

const StyledBody = styled.div`
  margin-top: 200px;
`

export default function Home() {
  const { data } = FoodDataMock
  return (
    <React.Fragment>
      <Header />
      <StyledBody>
        {data.map(item => (
          <Card
            key={String(item.id)}
            imageUrl={item.image_url}
            rating={item.rating}
            name={item.name}
            providedBy={item.provided_by}
          />
        ))}
      </StyledBody>
    </React.Fragment>
  )
}
