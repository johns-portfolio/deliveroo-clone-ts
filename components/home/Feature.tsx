import { Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import Restaurants from './Restaurants'

const Feature = ({
  id,
  title,
  description
}: {
  id: string
  title: string
  description: string
}) => {
  return (
    <>
      <View className="flex-row mt-6">
        <View className="flex-1">
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-sm text-gray-500">{description}</Text>
        </View>
        <ArrowRightIcon color={'#00CCBB'} />
      </View>

      <Restaurants />
    </>
  )
}

export default Feature
