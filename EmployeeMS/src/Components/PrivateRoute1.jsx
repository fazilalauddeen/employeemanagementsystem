import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute1 = ({children}) => {
  return localStorage.getItem("valid") ? children : <Navigate to="/employee_login"/>
}

export default PrivateRoute1