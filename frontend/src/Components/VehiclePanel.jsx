import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { BsPersonFill } from "react-icons/bs";

function VehiclePanel({setVehiclePanel , setConfirmRidePanel}) {
  return (
    <div>
      <div>
        <button onClick={()=>setVehiclePanel(false)} className='opacity p-2 w-full bg-zinc-100 flex justify-center active:bg-zinc-200'><FaChevronDown /></button>
        <h1 className='text-2xl font-semibold p-4'>Choose a Vehicle</h1>
      </div>
      <div className='p-3 space-y-2'>
        <div onClick={()=>{
          setVehiclePanel(false);
          setConfirmRidePanel(true);
        }} className='flex items-center gap-2 border-2 border-gray-200 w-full px-4 rounded-md active:border-gray-800'>
          <img src="./car.jpg" alt="" className='w-20' />
          <div className='w-full'>
            <div className='font-semibold flex items-center gap-1'>
              <h1 className='text-xl'>Uber Go</h1>
              <BsPersonFill />
              <p>4</p>
            </div>
            <p className='text-base font-semibold'>2 min away</p>
            <p className='text-sm text-gray-600'>Affordable compact rides</p>
          </div>
          <h4 className='leading-tight font-semibold text-xl'>₹193</h4>
        </div>
        <div className='flex items-center gap-2 border-2 border-gray-200 w-full px-4 rounded-md active:border-gray-800'>
          <img src="./bike.jpg" alt="" className='w-20' />
          <div className='w-full'>
            <div className='font-semibold flex items-center gap-1'>
              <h1 className='text-xl'>Moto</h1>
              <BsPersonFill />
              <p>1</p>
            </div>
            <p className='text-base font-semibold'>3 min away</p>
            <p className='text-sm text-gray-600'>Affordable Motorcycle rides</p>
          </div>
          <h4 className='leading-tight font-semibold text-xl'>₹65</h4>
        </div>
        <div className='flex items-center gap-2 border-2 border-gray-200 w-full px-4 rounded-md active:border-gray-800'>
          <img src="./auto.png" alt="" className='w-20' />
          <div className='w-full'>
            <div className='font-semibold flex items-center gap-1'>
              <h1 className='text-xl'>Uber Auto</h1>
              <BsPersonFill />
              <p>3</p>
            </div>
            <p className='text-base font-semibold'>4 min away</p>
            <p className='text-sm text-gray-600'>Affordable Auto rides</p>
          </div>
          <h4 className='leading-tight font-semibold text-xl'>₹119</h4>
        </div>
      </div>

    </div>
  )
}

export default VehiclePanel