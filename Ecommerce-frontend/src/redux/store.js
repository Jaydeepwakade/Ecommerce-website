import rootreducer from "./reducers";
import {createStore ,applyMiddleware} from "redux"
import {thunk} from 'redux-thunk';

const store = createStore(
    rootreducer,
    applyMiddleware(thunk)
)

export default store