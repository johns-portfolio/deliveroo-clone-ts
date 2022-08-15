import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { RestaurantType } from '../../../data/restaurants'
interface RestaurantState {
  currentRestaurant?: RestaurantType
}

// Define the initial state using that type
const initialState: RestaurantState = {}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action: PayloadAction<RestaurantType>) => {
      state.currentRestaurant = { ...action.payload }
    }
  }
})

export const { setCurrentRestaurant } = restaurantSlice.actions

export const getCurrentRestaurant = (state: RootState) =>
  state.restaurant.currentRestaurant

export default restaurantSlice.reducer
