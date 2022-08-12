import React from 'react'
import Navigation from './Navigation'
import { TailwindProvider } from 'tailwindcss-react-native'
import { Provider } from 'react-redux'
import { store } from './state/store'

const App = () => (
  <Provider store={store}>
    <TailwindProvider>
      <Navigation />
    </TailwindProvider>
  </Provider>
)

export default App
