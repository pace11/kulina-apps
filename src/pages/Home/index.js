import * as React from 'react'
import Card from '../../common/components/Card'
import FoodDataMock from '../../__json__/food.json'

export default function Home() {
  const { data } = FoodDataMock
  return (
    <React.Fragment>
      {data.map(item => (
        <Card
          key={String(item.id)}
          imageUrl={item.image_url}
          rating={item.rating}
          name={item.name}
          providedBy={item.provided_by}
        />
      ))}
    </React.Fragment>
  )
}
