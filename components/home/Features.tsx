import { View } from 'react-native'
import Feature from './Feature'

const Features = () => {
  return (
    <View className="mx-4">
      <Feature
        id="1"
        title="Featured"
        description="Pad placement from out partners"
      />
      <Feature
        id="2"
        title="Tasty Discounts"
        description="Everyone's been enjoying this juicy discounts!"
      />
      <Feature
        id="3"
        title="Offer Near You!"
        description="Why not support your local restaurants tonight!"
      />
    </View>
  )
}

export default Features
