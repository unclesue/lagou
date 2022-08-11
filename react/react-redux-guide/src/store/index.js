import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// import { logger } from './middleware/logger'
// import { thunk } from './middleware/thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(saga)