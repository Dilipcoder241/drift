import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [userData, setUserData] = useState("")
    
    const handleSubmit = (e)  =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = Object.fromEntries(formData.entries());
        setUserData(obj);
        e.target.reset();
    }

    return (
        <div className='py-4 px-6 flex flex-col justify-between h-screen'>
            <div>
                <img src="/logo.png" alt="logo" className='w-24' />

                <form className='mt-7 space-y-7' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='block text-lg font-semibold mb-2 '>What's Your Email</label>
                        <input type="email" id='email' name='email' className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='example@gmail.com' />
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-lg font-semibold mb-2 '>Enter Password</label>
                        <input type="password" id='password' name="password" className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='password' />
                    </div>

                    <button className='inline-block text-center bg-zinc-800 text-white w-full p-2 rounded-lg font-semibold text-lg'>Login</button>
                </form>
                <p className='text-center mt-4 font-medium'>New here? <Link to={"/signup"} className='text-blue-600'>Create new Account</Link></p>
            </div>

            <div>
                <Link to={"/captain-login"} className='inline-block text-center bg-[#438B52] text-white w-full p-2 rounded-lg font-semibold text-lg'>Login As Captain</Link>
            </div>
        </div>
    )
}

export default Login