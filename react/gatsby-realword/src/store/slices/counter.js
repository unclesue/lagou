import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const { increment, decrement, incrementByAmount } = slice.actions
export default slice.reducer