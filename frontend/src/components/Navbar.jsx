import React, { useState, useEffect ,useContext} from 'react'
import { assets } from '../assets/assets';
import { NavLink, useNavigate, useLocation, Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';




const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
 
  const {token,setToken,userData} =useContext(AppContext)

  const location = useLocation();
  const [scroll, setScroll] = useState(false);

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        setScroll(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScroll(false);
    }
  }, [location.pathname]);


  const navbarBackground =
    location.pathname === '/'
      ? scroll
        ? 'bg-blue-900 shadow-md'
        : 'bg-transparent'
      : 'bg-blue-900 shadow-md';


  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between text-sm py-4 px-4 transition-all duration-300 ${navbarBackground}`}>
      <img onClick={() => { navigate('/'); scrollTo(0, 0) }} src={assets.titlelogo} alt="logo" className='h-14 md:h-20 cursor-pointer' />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/' className='text-white'>
          <li className='py-1' onClick={() => { navigate('/'); scrollTo(0, 0) }}>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/#about' className='text-white'>
          <button onClick={() => navigate(`/about`)}>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </button>
        </NavLink>
        <NavLink to='/services' onClick={() => { scrollTo(0, 0) }} className='text-white'>
          <div className='flex items-center gap-0.5 cursor-pointer group relative'>
            <li className='py-1'>SERVICES</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            <img className='w-4' src={assets.dropdown} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <NavLink to='/services/Skin Service' className='hover:text-blue-900'>
                  Skin Services
                </NavLink>
                <NavLink to='/services/Hair Service' className='hover:text-blue-900'>
                  Hair Services
                </NavLink>

              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to='/contact' className='text-white'>
          <li className='py-1 text-white'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token && userData?
            <div className='flex items-center gap-2 cursor-pointer group relative md:mr-10 '>
              <img className='w-12 h-12 rounded-full' src={userData.image} alt="profile" />
              <img className='w-5' src={assets.dropdown} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('myprofile')} className='hover:text-blue-900 cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('myappointment')} className='hover:text-blue-900 cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-blue-900 cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='text-xs md:mr-5 p-3 bg-white md:text-sm text-blue-900 rounded-full font-light block hover:text-white hover:bg-blue-900 hover:border-2 hover:border-white '>Create Account</button>
        }
        <img onClick={() => setShowMenu(true)} src={assets.menuicon} className='w-6 md:hidden' alt="" />
        {/*---Mobile Menu -----*/}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-48' src={assets.titlelogo} alt="" />
            <img className='w-7' onClick={() => setShowMenu(false)} src={assets.crossicon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/services'><p className='px-4 py-2 rounded inline-block'>Services</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
