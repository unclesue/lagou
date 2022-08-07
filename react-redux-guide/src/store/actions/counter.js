// import { DECREMENT, INCREMENT, INCREMENT_ASYNC } from "../const/couner";
import { createAction } from 'redux-actions'

// 使用常量字符串方式
// export const increment = (payload) => ({ type: INCREMENT, payload });
// export const decrement = (payload) => ({ type: DECREMENT, payload });
// export const incrementAsync = (payload) => ({ type: INCREMENT_ASYNC, payload});

// 使用redux-actions替换常量字符串形式
export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const incrementAsync = createAction('decrement_async')