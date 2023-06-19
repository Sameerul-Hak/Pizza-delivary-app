const express=require("express")
const router=express.Router()


router.get("/login",(req,res)=>{
    res.send("login admin")
})
module.exports=router