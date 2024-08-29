import { login_error, login_req, login_succesfull, LOGINERROR, LOGINREQUEST, LOGINSUCCESFULL, REGISTER_ERROR, register_errror, REGISTER_REQUEST, register_request, REGISTER_SUCCESFULL, register_succesfull } from "../actions/action";


const intialstate = {
  token: '',
  loading: false,
  error: ""

}


const authreducer = (state = intialstate, action) => {
  switch (action.type) {
    case  REGISTER_REQUEST:
    case LOGINREQUEST: return { ...state, loading: true, error: null }


    case LOGINSUCCESFULL: return { ...state, loading: false, token: action.payload }

    case REGISTER_ERROR:
    case LOGINERROR: return { ...state, loading: false, error: action.payload }

    default: return state
  }
}
export default authreducer