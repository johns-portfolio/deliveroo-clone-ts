import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { useAppSelector } from '../../state/hooks'
import { useNavigation } from '@react-navigation/native'
import { getCurrentRestaurant } from '../../state/features/carts/restaurantSlice'

const BasketHeader = () => {
  const restaurant = useAppSelector(getCurrentRestaurant)
  const nav = useNavigation()
  return (
    <View className="flex-row justify-between items-center px-4 bg-white pb-4 border-[#00CCBB] border-b-2">
      <View></View>
      <View className="items-center">
        <Text className="text-xl font-bold text-gray-900">Basket</Text>
        <Text className="text-gray-400 font-bold">{restaurant?.title}</Text>
      </View>
      <TouchableOpacity onPress={nav.goBack}>
        <XCircleIcon color={'#00CCBB'} size={50} />
      </TouchableOpacity>
    </View>
  )
}

export default BasketHeader
