import React, { useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { AdminContext } from '../context/AdminContext'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const {slotDateFormat} = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }

  }, [aToken])

  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.doctoricon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.services}</p>
            <p className='text-gray-400'>Services</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-12' src={assets.appointmenticon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
            <p className='text-gray-400'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-24' src={assets.patienticon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
            <p className='text-gray-400'>Patients</p>
          </div>
        </div>

      </div>

      <div className='bg-white'>

        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
          <img className='w-6' src={assets.listicon} alt="" />
          <p className='font-semibold'>Latest Bookings</p>
        </div>

        <div className='pt-4 border border-t-0'>
          {
            dashData.latestAppointments.map((item, index) => (
              <div className='flex items-center px-6 py-3 hover:bg-gray-100' key={index}>
                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{item.serviceData.category}</p>
                  <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
                  
                </div>
                {item.cancelled ?
                    <p className='text-red-400 tex-xs font-medium'>Cancelled</p>
                    : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.crossicon} alt="" />}

              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Dashboard
