import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { format as currencyFormat } from 'currency-formatter'
import { RestaurantType } from '../../data/restaurants'

const MenuList = ({ dishes }: RestaurantType) => {
  return (
    <>
      <Text className="text-xl font-bold mx-4 mt-4 mb-2 text-gray-900">
        Menu
      </Text>
      {dishes.map((d, i) => (
        <TouchableOpacity
          key={i}
          className="flex-row items-center bg-white my-1 p-4"
        >
          <View className="flex-1">
            <Text className="font-bold text-lg text-gray-500">{d.name}</Text>
            <Text className="text-gray-500">{d.description}</Text>
            <Text className="mt-2 text-gray-500 font-bold">
              {currencyFormat(d.price, { code: 'GBP' })}
            </Text>
          </View>
          <View className="border-gray-100 border-x border-y">
            <Image source={{ uri: d.image }} className="h-20 w-20" />
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

export default MenuList
