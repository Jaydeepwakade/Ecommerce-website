export const API_URL = "http://localhost:3200"

export const LOGINREQUEST = "LOGINREQUEST"
export const LOGINSUCCESFULL = "LOGINSUCCESFULL"
export const LOGINERROR = "LOGINERROR"


export const login_req = (payload1) => {
    return { type: LOGINREQUEST, payload: payload1 }
}
export const login_succesfull = (payload1) => {


    return { type: LOGINSUCCESFULL, payload: payload1 }
}
export const login_error = (payload) => {
    return { type: LOGINERROR, payload: payload }
}


export const LoginUser = (payload) => {

    return (dispatch) => {
        dispatch(login_req())
        try {
            const response = fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                }, body: JSON.stringify(payload)

            })
            const data = response.json()
            localStorage.setItem("authToken", data.token)
            dispatch(login_succesfull(data))
        } catch (error) {
            dispatch(login_error(error.message))
        }
    }
}