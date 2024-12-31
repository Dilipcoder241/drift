import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { TbLocationFilled } from 'react-icons/tb'

function LookingForDriver({setVehicleFound}) {
  return (
    <div className='h-full overflow-y-scroll overflow-x-hidden'>
          <div>
            {/* <button onClick={()=>setConfirmRidePanel(false)} className='opacity p-2 w-full bg-zinc-100 flex justify-center active:bg-zinc-200'><FaChevronDown /></button> */}
            <h1 className='text-2xl font-semibold pt-4 px-4'>Looking For Near By Drivers</h1>
          </div>
          <img src="./car.jpg" alt="" className='w-36 mx-auto' />
          <div className='space-y-2 p-4'>
            <div className='flex items-center gap-4 w-full border-b-[1px] border-gray-400'>
              <MdLocationPin  className='text-4xl'/>
              <div className='w-full p-1'>
                <p className='text-lg font-semibold'>516/ 11-A</p>
                <p className='text-base text-gray-600'>Ram nagar vapi</p>
              </div>
            </div>
            <div className='flex items-center gap-4 w-full border-b-[1px] border-gray-400'>
              <TbLocationFilled className='text-3xl'/>
              <div className='w-full p-1'>
                <p className='text-lg font-semibold'>Third Wave Coffee</p>
                <p className='text-base text-gray-600'>17 sector 5 Bengluru , Karnataka</p>
              </div>
            </div>
            <div className='flex items-center gap-4 w-full border-b-[1px] border-gray-400'>
              <FaMoneyBillWave  className='text-3xl'/>
              <div className='w-full p-1'>
                <p className='text-lg font-semibold'>₹193</p>
                <p className='text-base text-gray-600'>Cash Cash</p>
              </div>
            </div>
          <button className='text-center bg-[#438B52] text-white p-2 rounded-lg font-semibold text-lg w-full'>Cofirm</button>
          </div>
        </div>
  )
}

export default LookingForDriver