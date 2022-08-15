import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import RestaurantScreen from './screens/RestaurantScreen'
import BasketScreen from './screens/BasketScreen'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{ presentation: 'modal', headerShown: false }}
        >
          <Stack.Screen name="BasketScreen" component={BasketScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
