const express=require("express")
const router=express.Router()
const path=require('path')
const {allpizzas}=require("./../controller/homepizzacontroller")
const PizzaModel=require("./../model/pizzaSchema")
router.get("/allpizzas",allpizzas)

module.exports=router