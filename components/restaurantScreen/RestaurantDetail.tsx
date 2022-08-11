import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  ArrowRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon
} from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { RestaurantType } from '../../data/restaurants'

const RestaurantDetail = ({
  title,
  rating,
  genre,
  address,
  short_description
}: RestaurantType) => {
  return (
    <View className="bg-white pt-4 px-4">
      <Text className="text-3xl font-bold">{title}</Text>
      <View className="flex-row items-center space-x-1">
        <StarIcon color={'green'} />
        <Text className="text-green-500 font-bold">{rating}</Text>
        <Text className="text-gray-500 font-bold"> · {genre}</Text>
        <LocationMarkerIcon color={'gray'} opacity={0.4} />
        <Text className="text-gray-500 font-bold">Nearby</Text>
        <Text className="text-gray-500 font-bold"> · {address}</Text>
      </View>

      <View className="pt-3">
        <Text className="text-gray-500">{short_description}</Text>
      </View>

      <TouchableOpacity className="flex-row items-center space-x-1 mt-4 py-3 border-y border-gray-300">
        <QuestionMarkCircleIcon color={'gray'} opacity={0.5} />
        <Text className="flex-1 font-bold">Have a food allergy?</Text>
        <ArrowRightIcon color={'#00CCBB'} />
      </TouchableOpacity>
    </View>
  )
}

export default RestaurantDetail
