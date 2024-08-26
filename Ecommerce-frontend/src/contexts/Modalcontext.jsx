import React, { createContext, useState } from 'react'

export const Modalcontexts = createContext()

export function Modalcontext({ children }) {


    const [ismodalopen, setismodalopen] = useState(false)
    const [isloginform, setisloginform] = useState(false)

    const openModal = (islogin = true) => {
        setisloginform(islogin)
        setismodalopen(true)
        
    }


    const closemodal = () => {
        setismodalopen(false)
        
    }

    const toggleform = () => {
        setisloginform((prev) => !prev)
    }

    return (

        <Modalcontexts.Provider value={{ ismodalopen, isloginform, openModal, closemodal, toggleform }}>
            {children}
        </Modalcontexts.Provider>
    )
}

export default Modalcontext