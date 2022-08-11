import { Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RestaurantType } from '../data/restaurants'
import MenuList from '../components/restaurantScreen/MenuList'
import RestaurantDetail from '../components/restaurantScreen/RestaurantDetail'
import TopCoverImage from '../components/restaurantScreen/TopCoverImage'

export default function RestaurantScreen() {
  const props = useRoute().params as RestaurantType
  console.log('🔥 params', useRoute().params)
  const nav = useNavigation()

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <ScrollView className="bg-gray-100">
      <TopCoverImage {...props} />
      <RestaurantDetail {...props} />
      <MenuList {...props} />
      <Text className="">ZZZZZZZZZZZZ</Text>
    </ScrollView>
  )
}
