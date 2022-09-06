import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { counterSlice } from "./slice/counter"

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
})

//API slice会包含自动生成的redux reducer和一个自定义中间件
export const rootStore = configureStore({
  reducer: rootReducer
})
