import React from 'react'
import { MdLocationPin } from "react-icons/md";


function LocationPanel({setLocationPanel, setVehiclePanel}) {
  return (
    <div>
        <div onClick={()=>{
            setLocationPanel(false);
            setVehiclePanel(true);
        }} className='flex justify-center items-center gap-4 px-4 py-4 border-2 border-gray-100 rounded-sm active:border-gray-700'>
            <h1 className='p-2 bg-zinc-200 rounded-full'><MdLocationPin/></h1>
            <h4 className='leading-tight font-semibold'>24 B near vithal mandir , raj laxmi appartment</h4>
        </div>
        <div className='flex justify-center items-center gap-4 px-4 py-4 border-2 border-gray-100 rounded-sm active:border-gray-70'>
            <h1 className='p-2 bg-zinc-200 rounded-full'><MdLocationPin/></h1>
            <h4 className='leading-tight font-semibold'>24 B near vithal mandir , raj laxmi appartment</h4>
        </div>
        <div className='flex justify-center items-center gap-4 px-4 py-4 border-2 border-gray-100 rounded-sm active:border-gray-70'>
            <h1 className='p-2 bg-zinc-200 rounded-full'><MdLocationPin/></h1>
            <h4 className='leading-tight font-semibold'>24 B near vithal mandir , raj laxmi appartment</h4>
        </div>
        <div className='flex justify-center items-center gap-4 px-4 py-4 border-2 border-gray-100 rounded-sm active:border-gray-70'>
            <h1 className='p-2 bg-zinc-200 rounded-full'><MdLocationPin/></h1>
            <h4 className='leading-tight font-semibold'>24 B near vithal mandir , raj laxmi appartment</h4>
        </div>
    </div>
  )
}

export default LocationPanel