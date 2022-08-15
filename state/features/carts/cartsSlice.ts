import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { Dish } from '../../../data/restaurants'
import groupArray from 'group-array'

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
    },
    clearAllCart: (state) => {
      state.items = []
    },
    removeCartAllId: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload)
    }
  }
})

export const { addCart, removeCart, clearAllCart, removeCartAllId } =
  cartsSlice.actions

export const getCarts = (state: RootState) => state.carts.items
export const getCartsById = (state: RootState, id: string) =>
  state.carts.items.filter((c) => c.id === id)

export const getItemCount = (state: RootState) => state.carts.items.length
export const getTotalPrice = (state: RootState) => {
  const subTotal = state.carts.items.reduce((total, c) => (total += c.price), 0)
  const deliveryFee = 5.99
  const total = subTotal + deliveryFee

  return {
    subTotal,
    deliveryFee,
    total
  }
}

type CartGrouping = {
  [key: string]: Dish[]
}
export const getCartsGrouping = (state: RootState) => {
  const data = groupArray(state.carts.items, 'id') as CartGrouping
  return data
}

export default cartsSlice.reducer
