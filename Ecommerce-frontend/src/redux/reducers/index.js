import authreducer from "./Loginreducer";


const rootreducer = combineRedcuers({
    auth:authreducer
})

export default  rootreducer