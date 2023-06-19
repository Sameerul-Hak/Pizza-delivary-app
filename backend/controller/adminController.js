const userModel=require("./../model/userModel")
const bcrypt=require('bcryptjs')

exports.CreateAdminAccount=async(req,res,next)=>{
    let extistinguser;
    try{
        extistinguser=await userModel.findOne({email:req.body.email})
    }
    catch(err){console.log(err)}
    if (extistinguser){
        res.status(400).json({message:"user already exits"})
    }
    else{
        const hasedpassword=bcrypt.hashSync(req.body.password)
        const user=new userModel({
            name:req.body.name,
            email:req.body.email, 
            password:hasedpassword,
            phoneNumber:req.body.phoneNumber,
            isadmin:req.body.isadmin
        })
        try{
            const newuser=await user.save();
        }
        catch(err){console.log(err)}
        return res.status(200).json({message:user})
        }
        next()
    }

exports.AdminLogin = async (req, res) => {
        const { email, password } = req.body;
        console.log(email, password);
        let extistinguser;
        try {
          extistinguser = await userModel.findOne({ email: req.body.email });
        } catch (err) {
          console.log(err);
        }
      
        if (!extistinguser) {
          return res.json({
            message: "User not found, please sign up",
          });
        }
      
        const isPasswordCorrect = bcrypt.compareSync(password, extistinguser.password);
        if (!isPasswordCorrect) {
          return res.json({
            message: "Invalid email or password",
          });
        }
      
        // Send the success response outside the if block
        return res.status(200).json({
          message: "Login success",
          user: extistinguser,
        });
      };
      