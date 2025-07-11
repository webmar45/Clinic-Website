import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate=useNavigate();
  return (
    <div className='relative min-h-screen mt-0 mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/mainphoto.jpg')"}} id='header'>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20' style={{textShadow:"5px 5px 8px navy"}}>Experience Ultimate Care at Skin And Hair Clinic</h2>
            <div className='space-x-6 mt-16'>
                <button onClick={()=>navigate('services')} className='border-2 border-white px-12 py-6 rounded text-white bg-blue-900 hover:text-blue-900 hover:bg-white hover:border-blue-900'>Explore Services</button>
                
            </div>
        </div>
    </div>
    
  )
}

export default Header
