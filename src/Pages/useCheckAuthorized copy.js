import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const useCheckAuthorized=()=>{
    let navigate = useNavigate();
    useEffect(()=>{
        const authtoken=localStorage.getItem('authtoken')
    if(!authtoken){
        navigate('/login')
    }
    },[])
}

export default useCheckAuthorized