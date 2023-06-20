const express=require("express")
const { CreateAdminAccount, AdminLogin, createpizza, allpizzas, detailpizzadmin } = require("../controller/adminController")
const router=express.Router()
const multer=require('multer')
const PizzaModel=require("./../model/pizzaSchema")
const path=require('path')

// Configure multer storage
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
  })
  const upload=multer({
    storage:storage
  })
  

router.post("/signup",CreateAdminAccount)
router.post("/login",AdminLogin)
router.post("/createpizza",upload.single('file'),(req,res)=>{
    PizzaModel.create({
        name:req.body.name,
        description:req.body.description,
        image:req.file.filename,
        size:req.body.size,
        quantity:req.body.quantity,
        price:req.body.price,
        tags:req.body.tags,
        toppings:req.body.toppings,
        discount:req.body.discount,
        typeofpizza:req.body.typeofpizza,
        base:req.body.base,
        sauce:req.body.sauce,
    }).then((result)=>res.json({message:"pizza saved"})).catch((err)=>console.log(err))
})
router.get("/detailpizzaadmin/:id",detailpizzadmin)
router.get("/allpizzas",allpizzas)
module.exports=router