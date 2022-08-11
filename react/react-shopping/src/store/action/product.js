import { createAction } from 'redux-actions'

// 从服务器获取商品列表
export const getProductsFromService = createAction('getProductsFromService')
// 保存商品列表到本地
export const setProductsToLocal = createAction('setProductsToLocal')
