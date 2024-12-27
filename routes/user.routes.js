const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');



router.post('/register',
   [
      body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters'),
      body('email').isEmail().withMessage('Please enter a valid email address'),
      body('password').isLength({ min: 2 }).withMessage('Password must be at least 2 characters')
   ],
   userController.registerUser
)

module.exports = router;
