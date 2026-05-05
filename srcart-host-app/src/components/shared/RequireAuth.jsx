// import { useContext } from "react";
// import { UserContext } from "../context/Usercontext";
import React from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../redux/user/userSelector"
import { Navigate } from "react-router-dom"
const RequireAuth = ({children}) => {
//const {currentUser} = useContext(UserContext);
const currentUser = useSelector(selectCurrentUser) 
    if(!currentUser){
        return <Navigate to ="/auth"/>
    }
  return (
    children
  )
}
export default RequireAuth