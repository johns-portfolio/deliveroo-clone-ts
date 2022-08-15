import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BasketDelivery = () => {
  return (
    <View className="my-5 bg-white flex-row items-center justify-between p-4 space-x-2">
      <Image
        source={{
          uri: 'https://image.shutterstock.com/shutterstock/photos/130541978/display_1500/stock-photo-brunette-japan-girl-studio-shot-on-white-130541978.jpg'
        }}
        className="w-10 h-10 rounded-full"
      />
      <Text className="flex-1">Deliver in 50-75 min</Text>
      <TouchableOpacity>
        <Text className="text-[#00CCBB]">Change</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketDelivery
