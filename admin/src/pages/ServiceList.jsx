import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'

const ServiceList = () => {
  const { services, aToken, getAllServices,changeAvailability } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllServices()
    }
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium '>All Services</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6 ml-auto'>
        {
          services.map((item, index) => (
            <div className='border-2 border-blue-700 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
              <img src={item.image} alt="" className='w-full h-48 object-cover border-b-2 border-blue-700' />
              <div className='p-4'>
                <p className='text-blue-900 text-lg font-medium'>{item.category}</p>
                <p className='text-blue-900 text-lg'>Services:</p>
                <ul className="list-disc pl-5 text-zinc-600">
                  {item.services.map((service, idx) => (
                    <li key={idx}>{service}</li>
                  ))}
                </ul>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available}/>
                  <p>Available</p>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ServiceList
