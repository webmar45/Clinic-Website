import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)

  return (
    <div className='min-h-screen bg-white border-r'>
        {
            aToken && <ul className='text-[#515151] mt-5'>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2F3FF] border-r-4 border-blue-900':''}`} to={'/dashboard'}>
                <img className='h-10' src={assets.homeicon} alt="" />
                <p>Dashboard</p>
            </NavLink>


            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2F3FF] border-r-4 border-blue-900':''}`} to={'/all-appointments'}>
                <img className='h-8' src={assets.appointmenticon} alt="" />
                <p>Appointments</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2F3FF] border-r-4 border-blue-900':''}`} to={'/addservies'}>
                <img className='h-8' src={assets.addicon} alt="" />
                <p>Add Services</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#F2F3FF] border-r-4 border-blue-900':''}`} to={'/servieslist'}>
                <img className='h-8' src={assets.listicon} alt="" />
                <p>Services List</p>
            </NavLink>

            </ul>
        }
      
    </div>
  )
}

export default Sidebar
