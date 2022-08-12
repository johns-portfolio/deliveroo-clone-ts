import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Cart {
  menuId: string
  qty: number
}

interface CartState {
  carts: Cart[]
}

// Define the initial state using that type
const initialState: CartState = {
  carts: []
}

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<string>) => {
      const existCart = state.carts.find((c) => c.menuId === action.payload)
      if (existCart) {
        existCart.qty++
      } else {
        state.carts.push({
          menuId: action.payload,
          qty: 1
        })
      }
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const existCart = state.carts.find((c) => c.menuId === action.payload)
      if (existCart && existCart?.qty > 1) {
        existCart.qty--
      } else {
        state.carts = state.carts.filter((c) => c.menuId !== action.payload)
      }
    }
  }
})

export const { addCart, removeCart } = cartsSlice.actions

export default cartsSlice.reducer
