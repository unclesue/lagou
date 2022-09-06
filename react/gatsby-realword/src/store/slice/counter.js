import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state, action) => {
      console.log(123)
      state.value += 1
    },
    decrement: (state, action) => {
      state.value -= action.payload || 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions
