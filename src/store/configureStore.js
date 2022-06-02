import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import entriesReducers from "../reducers/entries.reducers"
import modalsReducer from "../reducers/modals.reducers"
import createSagaMiddleware from "@redux-saga/core"
import { initSagas } from "../sagas"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];

const configureStore = () => {

const store= createStore(combineReducers({
    entries: entriesReducers,
    modals: modalsReducer
  }),
  composeWithDevTools(
      applyMiddleware(...middlewares))
  );
  initSagas(sagaMiddleware)
  return store;
}


export default configureStore
