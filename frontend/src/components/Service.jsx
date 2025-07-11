import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Service = () => {

  const navigate=useNavigate()
  const {services}=useContext(AppContext)
 

  return (
    <div className='flex flex-col items-center gap-4 mx-auto my-16 text-gray-900 md:mx-10'>
      <h1 className='text-4xl font-medium text-blue-900'>Services</h1>
      <div className='w-full max-w-4xl mx-auto grid grid-cols-auto sm:grid-cols-2 items-stretch gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {services.slice(0,2).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`);window.scrollTo({ top: 0, behavior: 'smooth' });}} className='border border-blue-900 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col h-full shadow-lg shadow-blue-900' key={index}>
                <img className='w-full h-48 object-cover border-b-4 border-blue-900' src={item.image} alt="" />
                <div className='p-4 flex-grow'>
                    <p className='text-blue-900 font-semibold'>{item.category}</p>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
            </div>
        ))}
        {services.slice(10,12).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`);window.scrollTo({ top: 0, behavior: 'smooth' });}} className='border border-blue-900 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col h-full shadow-lg shadow-blue-900' key={index}>
                <img className='w-full h-48 object-cover border-b-4 border-blue-900' src={item.image} alt="" />
                <div className='p-4 flex-grow'>
                    <p className='text-blue-900 font-semibold'>{item.category}</p>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/services');scrollTo(0,0)}} className='bg-blue-900 text-white px-12 py-3 rounded-full mt-10 hover:bg-white hover:text-blue-900 hover:border-4 hover:border-blue-900 hover:shadow-lg hover:shadow-blue-800'>More</button>
    </div>
  )
}

export default Service
