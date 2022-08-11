import { combineReducers } from 'redux'
import { counter } from './modules/counter'
import { modal } from './modules/modal'

export default combineReducers({
    counter,
    modal
})