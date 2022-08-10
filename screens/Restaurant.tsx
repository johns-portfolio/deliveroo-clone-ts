import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'

export default function Restaurant() {
  const params = useRoute()
  console.log('🔥 params', params.params)
  return (
    <View>
      <Text>Restaurant</Text>
    </View>
  )
}