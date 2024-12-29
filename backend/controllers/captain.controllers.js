const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainServices = require('../services/captain.services');

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
   res.cookie('token', token);

   res.status(201).json({ token, captain });


} 