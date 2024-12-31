import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { FaChevronDown } from "react-icons/fa";
import LocationPanel from '../Components/LocationPanel';
import VehiclePanel from '../Components/VehiclePanel';
import ConfirmRidePanel from '../Components/ConfirmRidePanel';
import WaitForDriver from '../Components/WaitForDriver';
import LookingForDriver from '../Components/LookingForDriver';


function Home() {
  const locationPanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const locationPanelCloseBtnRef = useRef(null);
 
  const [locationPanel, setLocationPanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(true);

  useGSAP(function () {
    if (locationPanel) {
      gsap.to(locationPanelRef.current, {
        height: "75%"
      })
      gsap.to(locationPanelCloseBtnRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(locationPanelRef.current, {
        height: "0%"
      })
      gsap.to(locationPanelCloseBtnRef.current, {
        opacity: 0
      })
    }

    
  }, [locationPanel])

  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        height: "70%"
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        height: "0%"
      })
    }
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        height: "70%"
      })
    } else {
      gsap.to(confirmRidePanelRef.current, {
        height: "0%"
      })
    }
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        height: "70%"
      })
    } else {
      gsap.to(vehicleFoundRef.current, {
        height: "0%"
      })
    }
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        height: "70%"
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        height: "0%"
      })
    }

    
  }, [vehiclePanel, confirmRidePanel , vehicleFound, waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img src="/logo.png" alt="logo" className='w-24 absolute m-2' />

      <div className='h-screen'>
        <img src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" className='h-full object-cover' />
      </div>

      <div className='absolute bottom-0 h-full flex flex-col justify-end'>
        <div className='space-y-3 p-4 bg-white h-[25%]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold'>Find Your Trip</h1>
            <button ref={locationPanelCloseBtnRef} onClick={() => setLocationPanel(false)} className='opacity-0 p-2 bg-zinc-200 rounded-full'><FaChevronDown /></button>
          </div>
          <form className='space-y-3'>
            <input onClick={() => setLocationPanel(true)} type="text" name='pickUp' className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='Add a pickup location' />
            <input onClick={() => setLocationPanel(true)} type="text" name='destination' className='bg-zinc-100 p-2 rounded-sm w-full' placeholder='Enter your destination' />
          </form>
        </div>

        <div ref={locationPanelRef} className='h-[0%] w-full bg-white'>
          <LocationPanel setLocationPanel={setLocationPanel} setVehiclePanel={setVehiclePanel}/>
        </div>

      </div>
        <div ref={vehiclePanelRef} className='h-[0%] w-full bg-white fixed bottom-0'>
          <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
        </div>
        <div ref={confirmRidePanelRef} className='h-[0%] w-full bg-white fixed bottom-0'>
          <ConfirmRidePanel setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={vehicleFoundRef} className='h-[0%] w-full bg-white fixed bottom-0'>
          <LookingForDriver setVehicleFound={setVehicleFound}/>
        </div>
        <div ref={waitingForDriverRef} className='h-[0%] w-full bg-white fixed bottom-0'>
          <WaitForDriver setWaitingForDriver={setWaitingForDriver}/>
        </div>

    </div>
  )
}

export default Home