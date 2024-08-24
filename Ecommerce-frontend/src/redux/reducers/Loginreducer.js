import { login_error, login_req, login_succesfull } from "../actions/action";


const intialstate ={
    token: '',
    loading : false,
    error: ""
    
}


const  authreducer = (state=intialstate,action)=>{
      switch (action.type) {
        case login_req: return {...state, loading:true, error:null}
            
        case login_succesfull :return {...state , loading:false ,token:action.payload}

        case login_error :return {...state, loading:false ,error:action.payload}
      
        default: return state
      }
}
  export default authreducer