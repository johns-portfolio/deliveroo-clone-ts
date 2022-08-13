import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { Dish } from '../../../data/restaurants'
interface CartState {
  items: Dish[]
}

// Define the initial state using that type
const initialState: CartState = {
  items: []
}

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Dish>) => {
      state.items.push({ ...action.payload })
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex((c) => c.id === action.payload)
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1)
      }
    }
  }
})

export const { addCart, removeCart } = cartsSlice.actions

export const getCarts = (state: RootState) => state.carts.items
export const getCartsById = (state: RootState, id: string) =>
  state.carts.items.filter((c) => c.id === id)

export const getItemCount = (state: RootState) => state.carts.items.length
export const getTotalPrice = (state: RootState) =>
  state.carts.items.reduce((total, c) => (total += c.price), 0)

export default cartsSlice.reducer
