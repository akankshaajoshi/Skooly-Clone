import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const statusLogin = localStorage.getItem("loggedIn");
        if(!statusLogin){
          return <Navigate to="/login"/>
        }
        return children;
}
    

export default ProtectedRoute