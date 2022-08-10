import React from 'react'
import Navigation from './Navigation'
import { TailwindProvider } from 'tailwindcss-react-native'

const App = () => (
  <TailwindProvider>
    <Navigation />
  </TailwindProvider>
)

export default App
