import { DECREMENT, INCREMENT } from "../const/couner.const"

export const increment = (payload) => ({ type: INCREMENT, payload })
export const decrement = (payload) => ({ type: DECREMENT, payload })