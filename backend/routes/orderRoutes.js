const express=require("express")
const router=express.Router()
const multer=require('multer')
const path=require('path')
const orderModel=require("./../model/orders")
const { getmyorders, changests } = require("../controller/orderController")




router.post("/createorder/:username",(req,res)=>{
    orderModel.create({
        username:req.params.username,
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        size:req.body.size,
        quantity:req.body.quantity,
        price:req.body.price,
        tags:req.body.tags,
        toppings:req.body.toppings,
        discount:req.body.discount,
        typeofpizza:req.body.typeofpizza,
        base:req.body.base,
        sauce:req.body.sauce,
    }).then((result)=>res.json({message:"order saved"})).catch((err)=>console.log(err))
})


router.get("/myorders",getmyorders)
router.post("/statuschange/:sts/:id/:username",changests);


module.exports=router