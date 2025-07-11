import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminroute.js'
import userRouter from './routes/userRoute.js'
import serviceRouter from './routes/serviceRoute.js'


//app config
const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/user',userRouter)
app.use('/api/service',serviceRouter)


app.get('/',(req,res)=>{
    res.send('Api working')
})

app.listen(port,()=>
    console.log("Server Started",port)
)