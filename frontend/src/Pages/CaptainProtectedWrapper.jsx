import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Context/UserContext';
import { captainDataContext } from '../Context/CaptainContext';

function CaptainProtectedWrapper({children}) {
    const navigate = useNavigate();
    const {setCaptainData} = UserContext(captainDataContext);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if(!token){
            navigate('/captain-login');
        }
        const data = axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile` , 
            {headers: {
            'Authorization': `Barer ${token}`
        }}).then(res=>{
            if(res.status == 200){
                setCaptainData(res.data.captain);
            }
        }).catch(err=>{
            localStorage.removeItem('token');
            navigate("/captain-login");
        })
    }, [])
    


  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectedWrapper