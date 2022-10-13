import { createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger"
import reducerFn from '../reducers/reducerFn'


let store=createStore(reducerFn,composeWithDevTools(
    applyMiddleware(logger)
  ));

export default store