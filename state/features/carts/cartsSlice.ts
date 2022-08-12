import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

// Define a type for the slice state
interface Cart {
  menuId: string
  qty: number
}

// Define the initial state using that type
const initialState: Cart[] = []

export const cartsSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<string>) => {
      const existCart = state.find((c) => c.menuId === action.payload)
      if (existCart) {
        existCart.qty++
      } else {
        state.push({
          menuId: action.payload,
          qty: 1
        })
      }
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const existCart = state.find((c) => c.menuId === action.payload)
      if (existCart && existCart?.qty > 1) {
        existCart.qty--
      } else {
        const newState = state.filter((c) => c.menuId !== action.payload)
        return newState
      }
    }
  }
})

export const { addCart, removeCart } = cartsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCarts = (state: RootState) => state.carts

export default cartsSlice.reducer
