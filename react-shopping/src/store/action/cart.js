import { createAction } from 'redux-actions'

// 从服务器获取商品列表
export const getCartsFromService = createAction('getCartsFromService')
// 保存商品列表到本地
export const setCartsToLocal = createAction('setCartsToLocal')
// 向服务器购物车添加商品
export const setCartToService = createAction('setCartToService')
// 向本地购物车添加商品
export const setCartToLocal = createAction('setCartToLocal')
// 从服务器删除商品
export const deleteCartFromService = createAction('deleteCartFromService')
// 从本地删除商品
export const deleteCartFromLocal = createAction('deleteCartFromLocal')
// 更新商品数量
export const updateCartFromService = createAction('updateCartFromService')
