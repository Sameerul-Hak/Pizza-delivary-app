const router = require("express").Router()
const User = require("../model/userModel")
const bcrypt = require("bcrypt")

// regsiter
router.post("/register", async (req, res) => {
  try {
    console.log("hello")
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      phoneNumber:req.body.phoneNumber,
    })
    console.log(newUser)
    const user = await newUser.save()
    console.log("Saved")
    console.log("user",user);
    res.status(200).json(user)
    alert("Registered")
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router