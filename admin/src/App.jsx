import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import AllApointments from './pages/AllApointments';
import AddService from './pages/AddService';
import ServiceList from './pages/ServiceList';


const App = () => {

  const {aToken} =useContext(AdminContext)

  return aToken ?(
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/all-appointments' element={<AllApointments/>} />
          <Route path='/addservies' element={<AddService/>}/>
          <Route path='/servieslist' element={<ServiceList/>}/>
          
        </Routes>
      </div>

    </div>
  ):(
    <>
    <Login/>
    <ToastContainer/>
    </>
  )
}

export default App
