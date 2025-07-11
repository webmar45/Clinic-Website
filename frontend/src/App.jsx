import React from 'react'
import { Route,Routes,useLocation } from 'react-router-dom'
import Home from './pages/home'
import AllServices from './pages/AllServices'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointment from './pages/MyAppointment'
import ScrollToHash from './components/ScrollToHash'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      
      <ToastContainer />
      <div className={isHomePage ? "absolute top-0 left-0 w-full z-10" : ""}>
        <Navbar />
      </div>
      <ScrollToHash/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:about' element={<Home />} />
        <Route path='/services' element={<AllServices />} />
        <Route path='/services/:servicestype' element={<AllServices />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myappointment' element={<MyAppointment />} />
        <Route path='/appointment/:serviceId' element={<Appointment />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
