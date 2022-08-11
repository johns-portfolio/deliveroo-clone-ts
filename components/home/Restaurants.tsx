import { ScrollView } from 'react-native'
import { restaurants } from '../../data/restaurants'
import Restaurant from './Restaurant'

const Restaurants = () => {
  return (
    <ScrollView
      className="mt-5"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {restaurants.map((r, i) => (
        <Restaurant {...r} key={i} />
      ))}
    </ScrollView>
  )
}

export default Restaurants
