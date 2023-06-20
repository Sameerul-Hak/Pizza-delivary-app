const PizzaModel=require("./../model/pizzaSchema")






exports.allpizzas=(req,res)=>{
    PizzaModel.find().then((pizzas)=>res.json(pizzas)).catch((err)=>console.log(err))
  }