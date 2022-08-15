import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasketHeader from '../components/basketScreen/BasketHeader'
import BasketDelivery from '../components/basketScreen/BasketDelivery'
import BasketList from '../components/basketScreen/BasketList'
import BasketTotal from '../components/basketScreen/BasketTotal'

export default function BasketScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="bg-gray-100 flex-1">
        <BasketHeader />
        <BasketDelivery />
        <BasketList />
        <Text></Text>
      </View>
      <BasketTotal />
    </SafeAreaView>
  )
}
