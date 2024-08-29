import authreducer from "./Loginreducer";
import { combineReducers } from "redux";


const rootreducer = combineReducers({
    auth:authreducer
})

export default  rootreducer