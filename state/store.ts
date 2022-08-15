import { configureStore } from '@reduxjs/toolkit'
import cartsReducer from './features/carts/cartsSlice'
import restaurantReducer from './features/carts/restaurantSlice'

export const store = configureStore({
  reducer: {
    carts: cartsReducer,
    restaurant: restaurantReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
