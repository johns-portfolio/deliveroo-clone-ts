import { Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RestaurantType } from '../data/restaurants'
import MenuList from '../components/restaurantScreen/MenuList'
import RestaurantDetail from '../components/restaurantScreen/RestaurantDetail'
import TopCoverImage from '../components/restaurantScreen/TopCoverImage'
import BasketPanel from '../components/restaurantScreen/BasketPanel'

const RestaurantScreen = () => {
  const props = useRoute().params as RestaurantType

  return (
    <>
      <ScrollView className="bg-gray-100">
        <TopCoverImage {...props} />
        <RestaurantDetail {...props} />
        <MenuList {...props} />
      </ScrollView>
      <BasketPanel />
    </>
  )
}

export default RestaurantScreen
