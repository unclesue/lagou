import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../share/store/reducer'

const store = createStore(reducer, eval('(' + window.INITIAL_STATE + ')'), applyMiddleware(thunk))

export default store
