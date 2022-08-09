import { View, Text } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'

export default function Home() {
  return (
    <TailwindProvider>
      <Text className="text-red-500">Home</Text>
    </TailwindProvider>
  )
}
