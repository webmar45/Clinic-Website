import { createContext, useState } from "react";
import { useEffect } from "react";
import { Services } from "../assets/assets";
import { toast } from "react-toastify";
import axios from 'axios';

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

    const [userData,setUserData] = useState(false)
    const [services,setServices] = useState([])


    const loadUserProfileData = async () => {

        try {
            
            const {data} = await axios.get(backendUrl + '/api/user/getprofile',{headers:{token}})

            if(data.success){
                setUserData(data.userData)
            }
            else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    
    const getServiceData = async () =>{
        try {
            const {data} = await axios.get(backendUrl + '/api/service/list')
            if(data.success){
                setServices(data.services)

            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    }

    const value = {
        
        token,setToken,
        backendUrl,
        userData,setUserData,
        loadUserProfileData,
        services,getServiceData

    }

    

    useEffect(()=>{
        getServiceData()
    },[])

    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    },[token])

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider