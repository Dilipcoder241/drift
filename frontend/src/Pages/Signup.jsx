import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
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
                        <label htmlFor="name" className='block text-lg font-semibold mb-2 '>What's Your Name</label>
                        <input type="text" id='name' name='name' className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='Name' />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-lg font-semibold mb-2 '>What's Your Email</label>
                        <input type="email" id='email' name='email' className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='example@gmail.com' />
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-lg font-semibold mb-2 '>Enter Password</label>
                        <input type="password" id='password' name="password" className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='password' />
                    </div>

                    <button className='inline-block text-center bg-zinc-800 text-white w-full p-2 rounded-lg font-semibold text-lg'>Create Account</button>
                </form>
                <p className='text-center mt-4 font-medium'>Already have an account? <Link to={"/login"} className='text-blue-600'>Login here</Link></p>
            </div>

            <div>
                <p className='text-xs'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
            </div>
    </div>
  )
}

export default Signup