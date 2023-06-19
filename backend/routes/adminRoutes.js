const express=require("express")
const { CreateAdminAccount, AdminLogin } = require("../controller/adminController")
const router=express.Router()


router.post("/signup",CreateAdminAccount)
router.post("/login",AdminLogin)
module.exports=router