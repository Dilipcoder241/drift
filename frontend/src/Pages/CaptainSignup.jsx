import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { captainDataContext } from '../Context/CaptainContext';
import axios from 'axios';

function CaptainSignup() {
    const navigate = useNavigate();
    const {setCaptainData} = useContext(captainDataContext);
    
    const handleSubmit = async (e)  =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const vehicleData = {
            color: formData.get('color'),
            plate: formData.get('plate'),
            capacity: formData.get('capacity'),
            vehicleType: formData.get('vehicleType'),
        };
    
        // Create the other form data object (captain info in this case)
        const captainData = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
        };
    
        // Combine both captain data and vehicle data
        const obj = {
            ...captainData,
            vehicle: vehicleData,
        };
        const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, obj);
        if(data.status = 200){
            setCaptainData(data.data.user);
            navigate("/captain-home");
        }
        e.target.reset();
    }
  return (
    <div className='py-4 px-6 flex flex-col justify-between h-screen'>
            <div>
                <img src="/logo.png" alt="logo" className='w-24' />

                <form className='mt-7 space-y-7' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='block text-lg font-semibold mb-2 '>What's Captain Name</label>
                        <input type="text" id='name' name='name' className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='Name' />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-lg font-semibold mb-2 '>What's Captain Email</label>
                        <input type="email" id='email' name='email' className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='example@gmail.com' />
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-lg font-semibold mb-2 '>Enter Password</label>
                        <input type="password" id='password' name="password" className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='password' />
                    </div>


                    <div className='space-y-2'>
                        <label className='block text-lg font-semibold'>Vehicle Information</label>
                        <div className='flex gap-4'>
                            <input type="text" name="color" className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='Vehicle Color' />
                            <input type="text" name="plate" className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='Vehicle Plate' />
                        </div>
                        <div className='flex gap-4'>
                            <input type="number" name="capacity" className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='Vehicle Capacity' />
                            <select name="vehicleType" className='bg-zinc-100 p-2 rounded-sm w-full'>
                                <option value="car">car</option>
                                <option value="auto">auto</option>
                                <option value="motercycle">motercycle</option>
                            </select>
                        </div>
                    </div>



                    <button className='inline-block text-center bg-zinc-800 text-white w-full p-2 rounded-lg font-semibold text-lg'>Create Account</button>
                </form>
                <p className='text-center mt-4 font-medium'>Already have an account? <Link to={"/captain-login"} className='text-blue-600'>Login here</Link></p>
            </div>

            <div>
                <p className='text-xs'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
            </div>
    </div>
  )
}

export default CaptainSignup