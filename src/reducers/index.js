import { combineReducers } from 'redux'
import { animalsReducer } from './animals'

export const appReducer = combineReducers({
  project: (state = {}) => state,
  animals: animalsReducer,
})
