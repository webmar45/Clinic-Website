import express from 'express'
import { addService ,adminDashboard,allservices,appointmentCancel,appointmentsAdmin,loginAdmin} from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailablity } from '../controllers/serviceController.js'

const adminRouter = express.Router()

adminRouter.post('/add-service',authAdmin,upload.single('image'),addService)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-service',authAdmin,allservices)
adminRouter.post('/change-availability',authAdmin,changeAvailablity)
adminRouter.get('/appointments',authAdmin,appointmentsAdmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)

export default adminRouter