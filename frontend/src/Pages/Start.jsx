import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div className='flex flex-col justify-between h-screen'>
        <div className='h-full p-2 bg-[url("/drift-background-2.jpg")] bg-cover'>
            <img src="/logo.png" alt="logo" className='w-24' />
        </div>

        <div className='bottom p-2 w-full mb-5'>
            <h1 className='text-3xl font-bold mb-5'>Get Start With Drift</h1>
            <Link to={"/login"} className='inline-block text-center bg-zinc-800 text-white w-full p-2 rounded-lg font-semibold text-lg'>Continue</Link>
        </div>
    </div>
  )
}

export default Start