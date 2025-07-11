import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios";
import { AdminContext } from '../context/AdminContext';
import {toast} from 'react-toastify' 


const AddService = () => {

  const [docImg,setDocImg]=useState(false)
  const [servicetype,setServicetype]=useState('Skin Service')
  const [category,setCategory]=useState('')
  const [services,setServices]=useState('')
  const [description,setDescription]=useState('')

  const {backendUrl,aToken}= useContext(AdminContext)


  const onSubmitHandler = async (event) =>{
    event.preventDefault()

    try {
      if(!docImg){
        return toast.error("Image Not Selected")
      }

      const formData = new FormData()

      formData.append('image',docImg)
      formData.append('servicetype',servicetype)
      formData.append('category',category)
      services.split(',').map(service => service.trim()).forEach(service => {
        formData.append('services[]', service);
      });
      
      formData.append('description',description)
      
      //console log formData
      formData.forEach((value,key)=>{
        console.log(`${key}:${value}`);
      })

      const {data}= await axios.post(backendUrl+'/api/admin/add-service',formData,{headers:{aToken}})

      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setCategory('')
        setServices('')
        setDescription('')

      }
      else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Service</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[100vh]'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
            <label htmlFor="service-img">
                <img className='w-20 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg):assets.uploadicon} alt="" />
            </label>
            <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id="service-img" hidden/>
            <p>Upload Service <br />picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start  text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Service Type</p>
              <select onChange={(e)=>setServicetype(e.target.value)} value={servicetype} className='border rounded px-3 py-2' name="" id="">
                <option value="Skin Service">Skin Service</option>
                <option value="Hair Service">Hair Service</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Category</p>
              <input onChange={(e)=>setCategory(e.target.value)} value={category}  className='border rounded px-3 py-2' type="text" placeholder='Skin Cancer Screening & Treatment' required/>
            </div>
            

            <div className='flex-1 flex flex-col gap-1'>
              <p>Services (comma separated)</p>
              <input onChange={(e)=>setServices(e.target.value)} value={services} className='border rounded px-3 py-2' type="text" placeholder='Biopsy, Mohs Surgery, Cryosurgery' required/>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='mt-4 mb-2'>Description</p>
              <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full px-4 pt-2 border rounded'  type="text" placeholder='Describe Service' rows={5} required/>
            </div>

            <button type='submit' className='bg-blue-900 px-10 py-3 mt-4 text-white rounded-full'>Add Service</button>
            </div>
            
        </div>

      </div>

    </form>
  )
}

export default AddService
