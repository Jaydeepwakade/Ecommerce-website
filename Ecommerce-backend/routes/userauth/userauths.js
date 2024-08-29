
const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const usermodel = require("../../models/regesteruser.model")


userRouter.post("/register", async (req, res) => {
   const { firstname, lastname, mobile, email, password } = req.body

   try {
      const hash = await bcrypt.hash(password, 10)

      const newuser = new usermodel({
         firstname,
         lastname,
         mobile,
         email,
         password: hash
      });
      await newuser.save();

      res.status(201).json({ message: "user created succefuly" })

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'error while creating the user' })
   }


})

userRouter.post("/login", async (req, res) => {
   const { email, password } = req.body

   try {
      const user = await usermodel.findOne({ email })
      if (!user) {
         res.status(400).json({ message: "user not found" })
      }
      const ismatch = await bcrypt.compare(password, user.password)
      if (!ismatch) {
         res.status(400).json({ message: "invalid email or passowrd" })
      }

      const token = jwt.sign({ user_id: user._id, email: user.email }, process.env.JWT_SECRETKEY, { expiresIn: '1h' })

      return res.status(200).json({ token })

   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "error while login" })
   }

})



module.exports = userRouter