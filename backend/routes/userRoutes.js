const express=require("express")
const router=express.Router()
const userController=require("./../controller/usersController")

//url->localhost:3001/users/
// router.route("/").get(userController.checking)

module.exports=router