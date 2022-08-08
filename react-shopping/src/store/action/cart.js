import { createAction } from 'redux-actions'

// 从服务器获取商品
export const getProductsFromServiceCart = createAction('getProductsFromServiceCart')
// 保存商品到本地
export const setProductsToLocalCart = createAction('setProductsToLocalCart')
// 向服务器购物车添加商品
export const setProductToServiceCart = createAction('setProductToServiceCart')
// 向本地购物车添加商品
export const setProductToLocalCart = createAction('setProductToLocalCart')
