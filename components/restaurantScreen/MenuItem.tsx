import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { format as currencyFormat } from 'currency-formatter'
import { Dish } from '../../data/restaurants'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { RootState } from '../../state/store'
import { addCart, removeCart } from '../../state/features/carts/cartsSlice'

const MenuItem = ({ id, name, description, price, image }: Dish) => {
  const [isPressed, setIsPressed] = useState(false)

  const carts = useAppSelector((state: RootState) => state.carts.carts)
  const dispatch = useAppDispatch()
  const cartItem = carts.find((c) => c.menuId === id)

  return (
    <View className="bg-white my-1 p-4">
      <TouchableOpacity
        onPress={() => {
          setIsPressed((oldValue) => !oldValue)
        }}
        activeOpacity={0.6}
        className="flex-row items-center"
      >
        <View className="flex-1">
          <Text className="font-bold text-lg text-gray-500">{name}</Text>
          <Text className="text-gray-500">{description}</Text>
          <Text className="mt-2 text-gray-500 font-bold">
            {currencyFormat(price, { code: 'GBP' })}
          </Text>
        </View>
        <View className="border-gray-100 border-x border-y">
          <Image source={{ uri: image }} className="h-20 w-20" />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center space-x-2 mt-4">
          <TouchableOpacity onPress={() => dispatch(removeCart(id))}>
            <MinusCircleIcon color={'#00CCBB'} size={40} />
          </TouchableOpacity>
          <Text className="font-bold text-gray-900">{cartItem?.qty || 0}</Text>
          <TouchableOpacity onPress={() => dispatch(addCart(id))}>
            <PlusCircleIcon color={'#00CCBB'} size={40} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default MenuItem
