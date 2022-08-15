import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('test')
    }, 1000)
  })
}

const PreparingOrderScreen = () => {
  const nav = useNavigation()
  const [data, setData] = useState('')

  useEffect(() => {
    getData().then((c) => {
      setData(c)
      nav.navigate('Delivery' as never)
    })
  }, [])

  return (
    <View className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={{
          uri: 'https://adactivesas.github.io/adsum-web-map-examples/files/loading.gif'
        }}
        animation="slideInUp"
        className="w-96 h-96"
        iterationCount={1}
      />
      <Animatable.Text
        className="p-5 text-white text-lg font-bold"
        animation="slideInUp"
        iterationCount={1}
      >
        Wait for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color={'white'} />
    </View>
  )
}

export default PreparingOrderScreen
