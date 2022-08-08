import { handleActions } from "redux-actions";
import { setProductsToLocalCart, setProductToLocalCart } from "../../action/cart";

const initialState = [];

// // 添加购物车商品
function handleSetProductToLocalCart(state, action) {
  const newState = JSON.parse(JSON.stringify(state))
  const item = newState.find(item => item.id === action.payload.id)
  item ? (item.count += 1) : newState.push(action.payload)
  return newState
}

export const cart = handleActions({
  [setProductsToLocalCart]: (state, action) => action.payload,
  [setProductToLocalCart]: handleSetProductToLocalCart,
}, initialState);
