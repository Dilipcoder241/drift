import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDataContext } from '../Context/UserContext';

function UserProtectedWrapper({children}) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const {setUserData} = useContext(userDataContext);

    
    useEffect(() => {
    
        if(!token){
            navigate('/login');
        }
    }, [])
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile` , 
        {headers: {
        'Authorization': `Barer ${token}`
    }}).then(res=>{
        if(res.status == 200){
            setUserData(res.data.user)
        }
    }).catch(err=>{
        localStorage.removeItem('token');
        navigate("/login");
    })


  return (
    <>
        {children}
    </>
  )
}

export default UserProtectedWrapper