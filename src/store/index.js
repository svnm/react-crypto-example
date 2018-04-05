import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

import { markets } from './markets/reducer'

const rootReducer = combineReducers({
  markets
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
