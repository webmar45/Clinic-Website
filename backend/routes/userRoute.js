import express from 'express'
import { bookAppointment, cancelAppointment, getProfile, listAppointment, loginUser, registerUser, updateProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register',registerUser)


userRouter.post('/login',loginUser)

userRouter.get('/getprofile',authUser,getProfile)

userRouter.post('/updateprofile',upload.single('image'),authUser,updateProfile)

userRouter.put('/book-appointment',authUser,bookAppointment)

userRouter.get('/appointments',authUser,listAppointment)

userRouter.post('/cancel-appointment',authUser,cancelAppointment)

export default userRouter