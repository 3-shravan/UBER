const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainServices = require('../services/captain.services');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.register = async (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
   }

   const { fullname, email, password, vehicle } = req.body;


   const isExistingCaptain = await captainModel.findOne({ email: email });


   if (isExistingCaptain) {
      return res.status(400).json({ error: 'Captain already exists' });
   }

   const hashedPassword = await captainModel.hashPassword(password);

   const captain = await captainServices.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      vehicleNo: vehicle.vehicleNo,
      vehicleType: vehicle.vehicleType,
      vehicleCapacity: vehicle.vehicleCapacity,
      vehicleColor: vehicle.vehicleColor
   });

   const token = await captain.generateAuthToken();
   // res.cookie('token', token);

   res.status(201).json({ token, captain });


}

module.exports.login = async (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
   }

   const { email, password } = req.body;
   const captain = await captainModel.findOne({ email }).select('+password');

   if (!captain) {
      return res.status(400).json({ message: 'invalid username or password' })
   }
   const isMatch = await captain.comparePassword(password)

   if (!isMatch) {
      return res.status(400).json({ message: 'invalid username of passsword ' })
   }

   const token = await captain.generateAuthToken();
   res.cookie('token', token);

   res.status(200).json({ token, captain });



}

module.exports.profile = async (req, res, next) => {
   res.status(200).json({ captain: req.captain })
}

module.exports.logout = async (req, res, next) => {
   const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
   res.clearCookie('token');
   await blackListTokenModel.create({ token });
   res.status(200).json({ message: 'You have been logged out' });

}