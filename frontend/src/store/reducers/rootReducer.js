import statusReducer from './statusReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  status: statusReducer,
})

export default rootReducer