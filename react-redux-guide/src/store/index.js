import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import thunk from 'redux-thunk'
// import { logger } from './middleware/logger'
// import { thunk } from './middleware/thunk'
import createSagaMiddleware from 'redux-saga'
import counterSage from './sagas/counter.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(counterSage)