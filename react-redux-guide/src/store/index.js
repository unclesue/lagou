import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import { logger } from './middleware/logger'
import { thunk } from './middleware/thunk'

export const store = createStore(rootReducer, applyMiddleware(logger, thunk))