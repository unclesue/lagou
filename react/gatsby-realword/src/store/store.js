import { configureStore } from "@reduxjs/toolkit"
import { api } from "./services/api"
import counter from "./slices/counter"
import logger from "redux-logger"
import auth from "./slices/auth"
import article from "./slices/article"

// 中间件集合
const middlewareHandler = getDefaultMiddleware => {
  const middlewareList = [api.middleware, ...getDefaultMiddleware()]
  if (process.env.NODE_ENV === "development") {
    middlewareList.push(logger)
  }
  return middlewareList
}

export const createStore = options =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      counter,
      auth,
      article,
    },
    middleware: getDefaultMiddleware =>
      middlewareHandler(getDefaultMiddleware),
    ...options,
  })

export const store = createStore()
