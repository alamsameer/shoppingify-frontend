
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth";
function CheckAuth({children}) {
    const {user}=useSelector(state=>state.auth)
    const dispatch=useDispatch()
        useEffect(()=>{
         dispatch(setUser())
    },[])
  if(!user){
    return <Navigate to="/login"/>
  }
  else{
    return children
  }
}

export default CheckAuth