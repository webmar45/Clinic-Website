import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Contact = () => {


  const navigate=useNavigate()

  return (
    <div className='mt-28 mx-10'>
      
      <div className='text-center text-2xl pt-10 text-blue-700 font-bold'>
        <p>CONTACT <span className='text-blue-900'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-1/3 h-auto md:max-w-[-360px]' src={assets.contact} alt="" />

      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-bold text-2xl text-blue-800'>Our Clinic</p>
        <p className='text-gray-700 text-lg'>123, 5th MAIN <br />BENGALURU, KARNATAKA</p>
        <p className='text-gray-700 text-lg'>Tel:010-1111 1111</p>
        <p className='font-semibold text-lg text-gray-500'>For Details,Call Between <br /> 8am to 8pm Only</p>
        <p className='font-semibold text-lg text-gray-500'>Clinic Hours : <br />9am to 1pm & 5pm to 8pm</p>
        <button onClick={()=>{navigate('/services');scrollTo(0,0)}} className='border-2 px-8 py-3 rounded text-white bg-blue-900 hover:text-blue-900 hover:bg-white hover:border-blue-900'>Explore Services</button>
      </div>
      </div>

    </div>
  )
}

export default Contact
