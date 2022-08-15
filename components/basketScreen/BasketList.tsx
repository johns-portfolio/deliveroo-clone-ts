import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  ScrollView
} from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import {
  getCartsGrouping,
  removeCartAllId
} from '../../state/features/carts/cartsSlice'

const BasketList = () => {
  const carts = useAppSelector(getCartsGrouping)
  const dispatch = useAppDispatch()

  return (
    <ScrollView className="bg-white">
      {Object.entries(carts).map(([id, carts]) => {
        const cart = carts[0]
        return (
          <View key={id} className="flex-row items-center p-4 space-x-2">
            <Text className="text-[#00CCBB] font-bold">{carts.length} x</Text>
            <Image
              source={{ uri: cart.image }}
              className="w-10 h-10 rounded-full"
            />
            <Text className="flex-1 text-gray-900">{cart.name}</Text>
            <Text className="text-gray-900">
              <Currency quantity={cart.price} currency="GBP" />
            </Text>
            <TouchableOpacity
              onPress={() => dispatch(removeCartAllId(cart.id))}
            >
              <Text className="text-[#00CCBB]">Remove</Text>
            </TouchableOpacity>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default BasketList
