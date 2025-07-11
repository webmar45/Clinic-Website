import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div className='mx-10 md:mx-28' id='about'>
      <div className='text-center text-5xl pt-10 text-blue-700'>
        <p>ABOUT <span className='text-blue-900 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row  gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about} alt="aboutimage" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, atque? Quasi sapiente eum ratione neque ab. Iusto debitis recusandae veniam, sint error alias. Nulla cupiditate vero suscipit quibusdam ducimus maxime corporis assumenda enim amet ratione architecto quis repellendus mollitia, velit adipisci iusto maiores minima, facilis sunt est nemo necessitatibus iure, molestiae iste? Animi ea necessitatibus culpa ipsum eius unde cum veritatis accusamus dicta ipsa doloribus quae eum ut rem inventore fuga, impedit delectus quod non?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quam enim sequi sed dignissimos doloremque labore ea unde illum possimus.</p>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nostrum velit eligendi! Similique quod itaque necessitatibus aperiam alias accusantium eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, modi.</p>
        </div>
      </div>
    </div>
  )
}

export default About
