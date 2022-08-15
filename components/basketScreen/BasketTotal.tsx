import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useAppSelector } from '../../state/hooks'
import { getTotalPrice } from '../../state/features/carts/cartsSlice'
import { useNavigation } from '@react-navigation/native'

export default function BasketTotal() {
  const { subTotal, deliveryFee, total } = useAppSelector(getTotalPrice)
  const nav = useNavigation()
  return (
    <View className="bg-white p-5 space-y-3">
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-500 font-bold">Subtotal</Text>
        <Text className="text-gray-500 font-bold">
          <Currency quantity={subTotal} currency="GBP" />
        </Text>
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-500 font-bold">Delivery Fee</Text>
        <Text className="text-gray-500 font-bold">
          <Currency quantity={deliveryFee} currency="GBP" />
        </Text>
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-900 font-bold">Total</Text>
        <Text className="text-gray-900 font-bold">
          <Currency quantity={total} currency="GBP" />
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => nav.navigate('PreparingOrder' as never)}
        className="bg-[#00CCBB] px-4 py-3 rounded-lg items-center"
      >
        <Text className="text-white font-bold text-lg">Place Order</Text>
      </TouchableOpacity>
    </View>
  )
}
