const express=require("express")
const router=express.Router()
const multer=require('multer')
const path=require('path')
const orderModel=require("./../model/orders")




router.post("/createorder",(req,res)=>{
    orderModel.create({
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

module.exports=router