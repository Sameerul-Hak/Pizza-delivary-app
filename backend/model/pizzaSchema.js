const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  });
  

const pizzaSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"pizza should have name"],
    },
    image:{
        type:String
    },
    description:{
        type:String,
        required:[true,"pizza should have discription"],   
    },
    quantity:{
        type:Number,
        min:1,
        max:10,
        default:1
    },
    tags:{
        type:String
    },
    price:{
        type:Number,
        required:[true,"pizza should have price"],
    },
    size:{
        type:String,
        default:"small",
    },
    toppings:{
        type:String,
        required:true,
    },
    discount:{
        type:String,
        default:"10%",
    },
    typeofpizza:{
        type:String,
        enum: ['veg', 'non-veg',"cheese"],
    },
    base:{
        type: String,
        enum: ['thin crust', 'thick crust', 'deep dish', 'whole wheat', 'gluten-free'],
        required: true
    },
    sauce: {
        type: String,
        enum: ['marinara', 'barbecue', 'alfredo', 'pesto', 'ranch'],
        required: true
    },
    comments: [commentSchema]
})


const PizzaModel = mongoose.model('pizzas', pizzaSchema);
const CommentModel=mongoose.model("comments",commentSchema)
module.exports = PizzaModel,CommentModel;