import { handleActions } from "redux-actions";
import { deleteCartFromLocal, setCartsToLocal, setCartToLocal } from "../../action/cart";

const initialState = [];

// 向购物车添加商品
function handlesetCartToLocal(state, action) {
  const newState = JSON.parse(JSON.stringify(state))
  const item = newState.find(item => item.id === action.payload.id)
  if (item) {
    item.count = action.payload.count > 1 ? action.payload.count : parseInt(item.count) + 1
  } else {
    newState.push(action.payload)
  }
  return newState
}

// 从购物车删除商品
function handleDeleteCartFromLocal(state, action) {
  const newState = JSON.parse(JSON.stringify(state))
  const index = newState.findIndex(item => item.id === action.payload)
  index !== -1 && newState.splice(index, 1)
  return newState
}

export const cart = handleActions({
  [setCartsToLocal]: (state, action) => action.payload,
  [setCartToLocal]: handlesetCartToLocal,
  [deleteCartFromLocal]: handleDeleteCartFromLocal
}, initialState);
