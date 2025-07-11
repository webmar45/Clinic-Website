import {v2 as cloudinary} from "cloudinary"
import serviceModel from "../models/serviceModel.js"
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"
import userModel from "../models/userModel.js"


//API for adding service 
const addService =async (req,res) => {
    try{
        const{ servicetype, category,description,services}=req.body
        const imageFile = req.file 

        //checking for all data to add doctor
        if(!servicetype || !category || !description || !services)
        {
            return res.json({success:false,message:"Missing Details"})
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const serviceData={
            servicetype,
            category,
            image:imageUrl,
            description,
            services,
            
        }

        const newService = new serviceModel(serviceData)
        await newService.save()

        res.json({success:true,message:"Service added"})

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API for admin login
const loginAdmin = async (req,res) => {
    try {
        
        const {email,password}=req.body

        if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
        {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid credentials"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to fetch all doctors list for admin panel
const allservices = async (req,res)=>{
    try {
        const services = await serviceModel.find({}).select('-servicetype')
        res.json({success:true,services})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

//API to get all appointments list
const appointmentsAdmin = async (req,res)=>{
    try {
        const appointments= await appointmentModel.find({})
        res.json({success:true,appointments})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API for appointment cancellation
const appointmentCancel = async(req,res)=>{
    try {
        const {appointmentId}=req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        

        await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})

        //releasing service slot

        const {serviceId,slotDate,slotTime}=appointmentData
        const serviceData= await serviceModel.findById(serviceId)

        let slots_booked = serviceData.slots_booked

        slots_booked[slotDate] =slots_booked[slotDate].filter(e => e!== slotTime)

        await serviceModel.findByIdAndUpdate(serviceId,{slots_booked})

        res.json({success:true,message:"Appointment cancelled"})


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to get dashboard data for admin panel
const adminDashboard = async(req,res)=>{
    try {
        const services = await serviceModel.find({})
        const users = await userModel.find({})
        const appointment = await appointmentModel.find({})

        const dashData = {
            services:services.length,
            appointments:appointment.length,
            patients:users.length,
            latestAppointments:appointment.reverse().slice(0,5)

        }

        res.json({success:true,dashData})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addService,loginAdmin,allservices,appointmentsAdmin,appointmentCancel,adminDashboard}