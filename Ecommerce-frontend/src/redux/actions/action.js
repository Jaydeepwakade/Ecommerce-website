import { useContext } from "react"

import Modalcontext from "../../contexts/modalcontext"


export const API_URL = "http://localhost:3200"

export const LOGINREQUEST = "LOGINREQUEST"
export const LOGINSUCCESFULL = "LOGINSUCCESFULL"
export const LOGINERROR = "LOGINERROR"

export const REGISTER_REQUEST = "REGSETERREQUEST"
export const REGISTER_SUCCESFULL = "REGESTERSUCCESFULL"
export const REGISTER_ERROR = "REGISTERERROR"


// lOGIN ACTIONS
export const login_req = (payload1) => {
    return { type: LOGINREQUEST, payload: payload1 }
}
export const login_succesfull = (payload1) => {


    return { type: LOGINSUCCESFULL, payload: payload1 }
}
export const login_error = (payload) => {
    return { type: LOGINERROR, payload: payload }
}

// REGISTER ACTIONS
export const register_request = () => {
    return { type: REGISTER_REQUEST }
}

export const register_succesfull = (data) => {
    return { type: REGISTER_SUCCESFULL, payload: data }
}
export const register_errror = (error) => {
    return { type: REGISTER_ERROR, payload: error }
}



// login user functions that fetch the datat and  send the data of the login user
export const LoginUser = (payload,closeModal) => {

    return async (dispatch ) => {
  
        dispatch(login_req())
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                }, body: JSON.stringify(payload)

            })
            const data = await response.json()
            localStorage.setItem("authToken", data.token)
            console.log(data)
            dispatch(login_succesfull(data))
            console.log("login sucessfull")
            await data.token ?closeModal():  ""
        } catch (error) {
            dispatch(login_error(error.message))
            console.log("login afailed")
        }
    }
}

//new registreation users  function which alows to register the ne users

export const RegisterUser = (data,toggleform) => {

    return async (dispatch) => {
        dispatch(register_request())

        try {

            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            })

            const result = await response.json();
            dispatch(register_succesfull(result.message))
            alert(result.message)
           await toggleform()
            
        } catch (error) {
            console.log("error")
            dispatch(register_errror(error.message))
            alert(result.message)
        }

    }
}