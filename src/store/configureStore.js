import { combineReducers, createStore } from "redux"
import entriesReducers from "../reducers/entries.reducers"

const configureStore = () => {

return store = createStore(combineReducers({
    entries: entriesReducers,
  }))

}


export default configureStore
