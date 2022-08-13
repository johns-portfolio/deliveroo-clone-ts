import React from 'react'
import { Text, View } from 'react-native'
import { RestaurantType } from '../../data/restaurants'
import MenuItem from './MenuItem'

const MenuList = ({ dishes }: RestaurantType) => {
  return (
    <View className='pb-20'>
      <Text className="text-xl font-bold mx-4 mt-4 mb-2 text-gray-900">
        Menu
      </Text>
      {dishes.map((d, i) => (
        <MenuItem {...d} key={i} />
      ))}
    </View>
  )
}

export default MenuList
