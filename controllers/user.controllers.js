const userModel = require('../models/user.model')
const userServices = require('../services/user.services')
const { validationResult } = require('express-validator')


module.exports.registerUser = async (req, res, next) => {
   const errors = validationResult(req)


   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
   }


   const { fullname, email, password } = req.body

   const hashedPassword = await userModel.hashPassword(password)

   const user = await userServices.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword
   })
   const token = await user.generateAuthToken();

   res.status(201).json({ token, user, message: 'Registered Successfully' })
}

module.exports.loginUser = async (req, res, next) => {

   const errors = validationResult(req)

   if(!errors.isEmpty()) {
      return res.status(401).json({ errors: erros.array() })
   }

   const {email , password}=req.body;

   const user = await userModel.findOne({email}).select('+password');

   if(!user){
      return res.status(401).json({message:'invalid email or password'})
   }

   const isMatch=await user.comparePassword(password);
   console.log(isMatch);

   if(!isMatch){
      return res.status(401).json({message:'invalid email or password'})
   }
   const token =await user.generateAuthToken();
   res.status(200).json({token,user ,message:'Login Successfull'})
}