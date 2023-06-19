const express=require("express")
const app=express()
const multer=require('multer')
const mongoose=require('mongoose')
const cors=require('cors')
const UserRoutes=require("./routes/userRoutes")
const adminRoutes=require("./routes/adminRoutes")
app.use(cors({credentials:true,origin:"http://localhost:5173"}))
app.use(express.json())
app.use("/user",UserRoutes)
app.use("/admin",adminRoutes)
//to run server check u r in backend folder ->pizzaApp\backend> then type "npm start"
const MONGO_URL = "mongodb+srv://asamarun2003:pizza1234@cluster0.iz4axej.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000;
mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`Mongodb connected port:${PORT}`))

}).catch((err) => {
    console.log(`${err} didnot connect`)
})

app.listen(3001,()=>{
    console.log(`server listening on ${3001}`)
})