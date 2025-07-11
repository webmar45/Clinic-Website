import React, { useContext, useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const {serviceId}=useParams()

  const {services,backendUrl,token,getServiceData}=useContext(AppContext)
  const daysofWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']

  const navigate = useNavigate()

  const [serviceInfo,setserviceInfo]= useState(null)

  const [serviceSlots,setserviceSlots]=useState([ ])
  const [slotIndex,setslotIndex]=useState(0)
  const [slotTime,setslotTime] = useState('')

  const fetchServiceInfo =async () =>{
    const serviceInfo=services.find(service => service._id===serviceId)
    setserviceInfo(serviceInfo)
    console.log(serviceInfo)
  }

  const getAvailableSlots = async () => {
    setserviceSlots([]); // Clear the existing slots
  
    // Get today's date
    let today = new Date();
  
    let slots = []; // Temporary array to hold all slots
  
    // Iterate over the next 7 days
    for (let i = 0; i < 7; i++) {
      // Get the current date with the index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
  
      let now = new Date(); // Current date and time
  
      // Define the two intervals for time slots
      let morningStart = new Date(currentDate);
      morningStart.setHours(9, 0, 0, 0);
  
      let morningEnd = new Date(currentDate);
      morningEnd.setHours(13, 0, 0, 0); // 1:00 PM
  
      let eveningStart = new Date(currentDate);
      eveningStart.setHours(17, 0, 0, 0); // 5:00 PM
  
      let eveningEnd = new Date(currentDate);
      eveningEnd.setHours(20, 0, 0, 0); // 8:00 PM
  
      // Skip generating slots for today if all slots have passed
      if (i === 0 && now >= eveningEnd) {
        continue;
      }
  
      let timeSlots = [];
  
      // Generate morning time slots (only if valid for today)
      if (i > 0 || now < morningEnd) {
        let currentTime = new Date(morningStart);
        while (currentTime < morningEnd) {
          if (i > 0 || currentTime > now) {
            let formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeSlots.push({
              datetime: new Date(currentTime),
              time: formattedTime,
            });
          }
          currentTime.setMinutes(currentTime.getMinutes() + 30); // Increment by 30 minutes
        }
      }
  
      // Generate evening time slots (only if valid for today)
      if (i > 0 || now < eveningEnd) {
        let currentTime = new Date(eveningStart);
        while (currentTime < eveningEnd) {
          if (i > 0 || currentTime > now) {
            let formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            timeSlots.push({
              datetime: new Date(currentTime),
              time: formattedTime,
            });
          }
          currentTime.setMinutes(currentTime.getMinutes() + 30); // Increment by 30 minutes
        }
      }
  
      // Append the day's slots to the temporary array
      slots.push(timeSlots);
    }
  
    // Update the state with the accumulated slots
    setserviceSlots(slots);
  };
  
  const bookAppointment =  async () =>{
    if(!token){
      toast.warn('Login to book appointment')
      return navigate('/login')
    }
    try {
      const date = serviceSlots[slotIndex][0].datetime
      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()

      const slotDate = day +"_"+month+"_"+year

      const {data} = await axios.put(backendUrl+'/api/user/book-appointment',{serviceId,slotDate,slotTime},{headers:{token}})

      if (data.success) {
        toast.success(data.message)
        getServiceData()
        navigate('/myappointment')

      }else{
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      
    }
  }


  useEffect(()=>{
    fetchServiceInfo()
  },[services,serviceId])


  useEffect(()=>{
    getAvailableSlots()
  },[serviceInfo])

  useEffect(()=>{
    console.log(serviceSlots);
  },[serviceSlots])


  if (!serviceInfo) {
    // Render a loading state while serviceInfo is null
    return <p>Loading service details...</p>;
  }


  return (
    <div className='mt-32 mx-6'>
      {/*------Service Details------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
      <div>
        <img   className="w-[400px] h-[300px] object-cover rounded-lg shadow-md border-y-8 border-x-4 border-blue-900" src={serviceInfo.image} alt="" />
      </div>
      <div className='flex-1 border-x-2 border-y-4 border-blue-900 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-10px] sm:mt-0'>
        {/*-----service Info----- */}
        <p className='text-2xl font-bold text-blue-900'>{serviceInfo.category}</p>
        <div>
        {/* ---service description*/}
        <p className='text-gray-500 text-xl'>{serviceInfo.description}</p>
      </div>
      <div>
        <p className='text-2xl font-bold text-blue-900'>Services Available:</p>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px' }} className='text-lg text-gray-600'>
            {Array.isArray(serviceInfo.services) && serviceInfo.services.map((service, idx) => (
            <li key={idx}>{service}</li>
                        ))}
        </ul>
      </div>
      </div>
      
      </div>

      {/*---Booking Slots--- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-blue-900'>
        <p className='text-2xl'>Booking Slots</p>
        <div className='flex gap-3 items-center w-full  mt-4'>
          {
            serviceSlots.length && serviceSlots.map((item,index)=>(
              <div onClick={()=>setslotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index?'bg-blue-900 text-white':'border-2 border-blue-900'}`} key={index}>
                <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {serviceSlots.length && serviceSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setslotTime(item.time)} className={`text-sm font-light flex-shrink px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime? 'bg-blue-900 text-white':'text-blue-900 border-2 border-blue-900'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
          <button onClick={bookAppointment} className='bg-blue-900 text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
      </div>

    </div>
  )
}

export default Appointment
