const orderModel=require("./../model/orders")
const userModel=require("./../model/userModel")

exports.getmyorders=async (req,res)=>{
    let myorders;
    try{
        myorders=await orderModel.find()
        res.status(200).send(myorders)
    }
    catch(err)
    {
        res.send(err)
        console.log(err)
    }
}

exports.changests=(req,res)=>{
    const {sts,id}=req.params
    orderModel.findByIdAndUpdate(id, { status: sts, $inc: { quantity: -1 } })
    .then((result)=>res.status(200).json({message:"status updated sucessfully"}))
    .catch((err)=>{res.json({message:"something occured wrong.."})
    console.log(err)
})
}