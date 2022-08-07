import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "../const/couner";

export const increment = (payload) => ({ type: INCREMENT, payload });
export const decrement = (payload) => ({ type: DECREMENT, payload });
export const incrementAsync = (payload) => ({ type: INCREMENT_ASYNC, payload});
