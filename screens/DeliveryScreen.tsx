import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
import { useAppSelector } from '../state/hooks'
import { getCurrentRestaurant } from '../state/features/carts/restaurantSlice'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'

const DeliveryScreen = () => {
  const restaurant = useAppSelector(getCurrentRestaurant)!
  const nav = useNavigation()

  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView className="mx-5 z-10">
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => nav.navigate('Home' as never)}>
            <XIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order Help</Text>
        </View>
        <View className="bg-white rounded-lg py-5 px-4 my-5 space-y-3">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-bold text-gray-300">
                Estimated Arival
              </Text>
              <Text className="text-gray-700 text-3xl font-bold">
                40-55 Minutes
              </Text>
            </View>
            <Image
              source={require('../assets/motorcycle.png')}
              className="w-16 h-16 mr-2"
            />
          </View>
          <Progress.Bar indeterminate={true} color="#00CCBB" />
          <Text className="text-gray-500">
            Your order at {restaurant?.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        region={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
        className="flex-1 -mt-14"
      >
        <Marker
          coordinate={{
            latitude: restaurant.latitude,
            longitude: restaurant.longitude
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          pinColor="#00CCBB"
          identifier="origin"
          image={require('../assets/pin-restaurant-200.png')}
        />
      </MapView>
      <View className="px-5 py-4 bg-white flex-row space-x-4 items-center">
        <Image
          source={{
            uri: 'https://image.shutterstock.com/shutterstock/photos/130541978/display_1500/stock-photo-brunette-japan-girl-studio-shot-on-white-130541978.jpg'
          }}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-gray-500 font-bold">John Apisit</Text>
          <Text className="text-gray-400">Your Driver</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#00CCBB] font-bold text-lg mr-3">Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DeliveryScreen
