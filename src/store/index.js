import createSagaMiddleware from "@redux-saga/core"
import {createStore, applyMiddleware, compose} from "redux"
import imageReducer from "./reducers"
import sagas from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    imageReducer, 
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(sagas)

export default store