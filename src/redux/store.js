import { createStore, combineReducers } from 'redux'
import foo from './foo'

const reducers = combineReducers({
  foo,
})

const store = createStore(reducers)

export default store
