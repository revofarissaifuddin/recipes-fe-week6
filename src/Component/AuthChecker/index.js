import React from "react";
import {Navigate} from 'react-router-dom'

const AuthChecker = ({children}) => {
    const isAuth = localStorage.getItem("token")

    if(!isAuth){
        return(
            <Navigate to='/home' replace="true" />
        )
    }
    return children
}

export default AuthChecker