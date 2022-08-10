import { Text, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Search from '../components/home/Search'
import Categories from '../components/home/Categories'
import Features from '../components/home/Features'

export default function Home() {
  const nav = useNavigation()

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white">
      <Header />
      <Search />
      <ScrollView className="pt-2 bg-gray-100">
        <Categories />
        <Features />
        <Text>XXX</Text>
        <Text>XXX</Text>
        <Text>XXX</Text>
        <Text>XXX</Text>
        <Text>XXX</Text>
        <Text>XXX</Text>
        <Text>XXX</Text>
        <Text>XXX</Text>
        <Text>ZZZZZZZZ</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
