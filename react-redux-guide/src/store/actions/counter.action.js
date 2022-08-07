import { DECREMENT, INCREMENT } from "../const/couner.const";

export const increment = (payload) => ({ type: INCREMENT, payload });
export const decrement = (payload) => ({ type: DECREMENT, payload });

export const incrementAsync = (payload) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 2000);
};
