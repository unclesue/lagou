// import { DECREMENT, INCREMENT } from "../../const/couner";
import { handleActions } from  "redux-actions"
import { decrement, increment } from "../../actions/counter"

const initialState = { count: 0 }

// export const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { count: state.count + action.payload };
//     case DECREMENT:
//       return { count: state.count - action.payload };
//     default:
//       return state;
//   }
// };

// 使用redux-actions方式替换switch-case
export const counter = handleActions({
  [increment]: (state, action) => ({ count: state.count + action.payload }),
  [decrement]: (state, action) => ({ count: state.count - action.payload })
}, initialState)