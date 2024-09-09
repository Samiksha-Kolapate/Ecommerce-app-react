import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from './rootReducer'
import rootSaga from './rootSaga'

// create middleware instance
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

// register all saga
sagaMiddleware.run(rootSaga);


export default store;

