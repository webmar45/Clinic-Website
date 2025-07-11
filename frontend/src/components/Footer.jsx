import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate()

  return (
    <div className='w-full bg-blue-900 px-5 mb-0 cursor-default relative'>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_3fr] gap-14  mt-40 text-sm'>
        {/* left section*/}
        <div className='pt-5 '>
            <img className='mb-5 object-scale-down h-20' src={assets.titlelogo} alt="" />
            <div className='w-full md:w-2/3 text-gray-300 font-bold text-xl leading-8'>
            <p>123, 1th MAIN</p>
            <p>BENGALURU, KARNATAKA</p>
            <p className='pt-3 '><span className='border-b-4 border-b-gray-300'>Clinic Hours :</span></p>
            <p>9am to 1pm & 5pm to 8pm</p>
            </div>
        </div>

        {/* center section*/}
        <div className='text-xl font-medium mb-5 text-gray-300 mt-14 leading-8'>
                <div>
                    <p className='font-bold text-2xl'><span className='border-b-4 border-b-gray-300'>Services</span></p>
                    <ul className='mt-3 cursor-pointer '>
                        <li onClick={()=>{navigate('/services/:skinservices');window.scrollTo({ top: 0, behavior: 'smooth' });
    }} className='hover:scale-105 transition-all hover:text-blue-700'><span>-{'\u003E'}</span>Skin Services</li>
                        <li onClick={()=>{navigate('/services/:hairservices');window.scrollTo({ top: 0, behavior: 'smooth' });
    }} className='hover:scale-105 transition-all hover:hover:text-blue-700'><span>-{'\u003E'}</span>Hair Services</li>
                    </ul>
                </div>
                <div className='mt-6 '>
                    <p className='font-bold text-2xl'><span className='border-b-4 border-b-gray-300'>Contact Us</span></p>
                    <div className='flex flex-row gap-2 mt-3'>
                        <img className='object-scale-down h-6' src={assets.tel_logo} alt="" />
                        <p>Tel:010-1111 1111</p>
                    </div>
                    <p>For Details,Call Between</p>
                    <p>8am to 8pm Only</p>
                </div>
            
            
        </div>

        {/* right section*/}
        <div className='text-2xl font-bold mb-5 text-gray-300 pt-14'>
            <div className='flex flex-row gap-1 mb-3'>
                <img className='object-scale-down h-10' src={assets.location} alt="" />
                <p><span className='border-b-4 border-b-gray-300'>Locate</span></p>
            </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089923568!2d77.46612624848429!3d12.953945614209811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1752213665269!5m2!1sen!2sin" width="100%" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
        </div>
      </div>
    </div>
  )
}

export default Footer
