import { useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { RestaurantType } from '../../data/restaurants'
import { clearAllCart } from '../../state/features/carts/cartsSlice'
import {
  getCurrentRestaurant,
  setCurrentRestaurant
} from '../../state/features/carts/restaurantSlice'
import { useAppDispatch, useAppSelector } from '../../state/hooks'

const Restaurant = (props: RestaurantType) => {
  const { imgUrl, title, rating, genre, address } = props
  const nav = useNavigation()
  const dispatch = useAppDispatch()
  const restaurant = useAppSelector(getCurrentRestaurant)

  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setCurrentRestaurant(props))
        if (restaurant?.title !== title) {
          dispatch(clearAllCart())
        }

        nav.navigate('Restaurant' as never, props as never)
      }}
    >
      <View className="mr-4 bg-white">
        <Image source={{ uri: imgUrl }} className="h-36 w-64" />
        <View className="p-2">
          <Text className="text-lg font-bold">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon opacity={0.3} color={'green'} />
            <Text className="text-xs text-green-500">{rating}</Text>
            <Text className="text-xs text-gray-500"> · {genre}</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon color={'gray'} />
            <Text className="text-gray-500 text-xs">Nearby · {address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Restaurant
