const express=require("express")
const app=express()
const multer=require('multer')
const mongoose=require('mongoose')
const cors=require('cors')
const UserRoutes=require("./routes/userRoutes")
const adminRoutes=require("./routes/adminRoutes")
app.use(cors())
app.use(express.json())
app.use("/user",UserRoutes)
app.use("/admin",adminRoutes)

//to run server check u r in backend folder ->pizzaApp\backend> then type "npm start"

const port=3001
app.listen(port,()=>console.log(`listening on ${port}`))