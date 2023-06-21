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

exports.changests = (req, res) => {
    const { sts, id, username } = req.params;
    orderModel
      .findOneAndUpdate({ _id: id, username: username }, { status: sts, $inc: { quantity: -1 } }, { new: true })
      .then((result) => res.status(200).json({ message: "Status updated successfully" }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
      });
  };
  

  exports.getusercarts = (req, res) => {
    const { username } = req.params;
    console.log(username);
    orderModel
      .find({ username: username })
      .then((result) => res.status(200).send(result))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
      });
  };
  
  exports.deleteorder = (req, res) => {
    const { id, username } = req.params;
    console.log(id, username);
    orderModel
      .deleteOne({ _id: id, username: username })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Order not found" });
        }
        res.json({ message: "Order cleared successfully" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
      });
  };
  