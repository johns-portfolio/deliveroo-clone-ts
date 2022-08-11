import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { RestaurantType } from '../../data/restaurants'

const TopCoverImage = ({ imgUrl }: RestaurantType) => {
  const nav = useNavigation()

  return (
    <View className="relative">
      <TouchableOpacity activeOpacity={0.8}>
        <Image source={{ uri: imgUrl }} className="h-56 " />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nav.goBack}
        className="absolute rounded-full bg-gray-100 top-14 left-2 p-2"
      >
        <ArrowLeftIcon color={'#00CCBB'} />
      </TouchableOpacity>
    </View>
  )
}

export default TopCoverImage
