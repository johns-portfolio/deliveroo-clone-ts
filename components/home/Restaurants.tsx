import { ScrollView } from 'react-native'
import Restaurant from './Restaurant'

const Restaurants = () => {
  return (
    <ScrollView
      className="mt-5"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Restaurant
        imgUrl="https://play-lh.googleusercontent.com/exBPtfutY2eB4nHRUX0hZzMGRK8xSWutg9t6InmzhCtRwZ3_z_F6dz9LULpmlM0DoA"
        title="KFC"
        rating={4.5}
        genre="American"
        address="123 abc"
      />
      <Restaurant
        imgUrl="https://www.ryoiireview.com/upload/article/202005/1590652025_f5cf6ff62cfd712fdc46cfc4880b91ef.jpg"
        title="Kin Japaness Buffe"
        rating={4.5}
        genre="American"
        address="123 abc"
      />
      <Restaurant
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/440px-McDonald%27s_logo.svg.png"
        title="Mcdonald's"
        rating={4.5}
        genre="American"
        address="123 abc"
      />
    </ScrollView>
  )
}

export default Restaurants
