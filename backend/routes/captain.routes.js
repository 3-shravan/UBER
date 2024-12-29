const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controllers');


router.post('/register', [
   body('fullname.firstname').trim().isLength({ min: process.env.FIRSTNAME_MIN_LENGTH }).withMessage('Firstname must be at least ' + process.env.FIRSTNAME_MIN_LENGTH + ' characters long'),

   body('email').trim().isEmail().withMessage('Invalid email address'),

   body('password').trim().isLength({ min: process.env.PASSWORD_MIN_LENGTH }).withMessage('Password must be at least ' + process.env.PASSWORD_MIN_LENGTH + ' characters long'),

   body('vehicle.vehicleNo').trim().isLength({ min: process.env.VEHICLE_NO_MIN_LENGTH }).withMessage('Vehicle number must be at least ' + process.env.VEHICLE_NO_MIN_LENGTH + ' characters long'),

   body('vehicle.vehicleType').isIn(process.env.VEHICLE_TYPE).withMessage('Invalid vehicle type'),

   body('vehicle.vehicleCapacity').isInt({ min: process.env.MIN_VEHICLE_CAPACITY, max: process.env.MAX_VEHICLE_CAPACITY }).withMessage('Capacity must be a number')

], captainController.register)


module.exports = router;