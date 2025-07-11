import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import serviceModel from '../models/serviceModel.js'
import appointmentModel from '../models/appointmentModel.js'

// API to register user

const registerUser = async (req,res)=>{
    try {
        
        const {name,email,password} = req.body

        if(!name || !password || !email){
            return res.json({success:false,message:"Missing Details"})
        }


        //VAlidating email format
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter a valid email"})
        }

        //Validating strong password
        if(password.length < 8){
            return res.json({success:false,message:"Enter a strong password"})
        }

        //Hashing the password

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData ={
            name,
            email,
            password:hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API for user login
const loginUser= async(req,res)=>{
    try {
        
        const {email,password} =req.body
        const user = await userModel.findOne({email})


        if(!user){
            return res.json({success:false,message:"User does not exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


//Api to get user profile data
const getProfile = async (req,res) => {
    try {
        
        const {userId} = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({success:true,userData})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

//Api to update user profile
const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        const imageFile = req.file;

        if (!userId || !name || !phone || !address || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" });
        }

        // Parse address safely
        let parsedAddress;
        try {
            parsedAddress = JSON.parse(address);
        } catch (err) {
            return res.json({ success: false, message: "Invalid address format" });
        }

        // Update user data
        await userModel.findByIdAndUpdate(userId, { name, phone, address: parsedAddress, dob, gender });

        // Upload image if provided
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
            const imageURL = imageUpload.secure_url;

            await userModel.findByIdAndUpdate(userId, { image: imageURL });
        }

        res.json({ success: true, message: "Profile Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

//API to book appointment

const bookAppointment = async (req,res) =>{
    try {
        const {userId,serviceId,slotDate,slotTime}=req.body

        const serviceData = await serviceModel.findById(serviceId)

        if(!serviceData.available){
            return res.json({success:false,message:'Service not availabel'})
        }

        let slots_booked = serviceData.slots_booked

        //Checking for slots availability
        if(slots_booked[slotDate]){
            if(slots_booked[slotDate].includes(slotTime)){
                return res.json({success:false,message:'Slot not availabel'})
            }
            else{
                slots_booked[slotDate].push(slotTime)
            }
        }else{
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData =await userModel.findById(userId).select('-password')

        delete serviceData.slots_booked

        const appointmentData = {
            userId,
            serviceId,
            userData,
            serviceData,
            slotTime,
            slotDate,
            date:Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()
        
        //save new slots data in serviveData
        await serviceModel.findByIdAndUpdate(serviceId,{slots_booked})

        res.json({success:true,message:'Appointment Booked'})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to get user appointments for frontend my-appointments page
const listAppointment = async (req,res)=>{
    try {
        const {userId}= req.body
        const appointments= await appointmentModel.find({userId})

        res.json({success:true,appointments})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//API to cancel appointment
const cancelAppointment = async(req,res)=>{
    try {
        const {userId,appointmentId}=req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        //verify appointment user
        if(appointmentData.userId!== userId){
            return res.json({success:false,message:'Unauthorized action'})
        }

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

export {registerUser,loginUser,getProfile,updateProfile,bookAppointment,listAppointment,cancelAppointment}