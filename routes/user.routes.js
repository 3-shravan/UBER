const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');
const authMiddleware = require('../middleware/auth.middleware')



router.post('/register', [
   body('fullname.firstname').trim().isLength({ min: 3 }).withMessage('First name must be at least 3 characters'),
   body('email').trim().isEmail().withMessage('Please enter a valid email address'),
   body('password').trim().isLength({ min: 2 }).withMessage('Password must be at least 2 characters')
], userController.registerUser)

router.post('/login', [
   body('email').trim().isEmail().withMessage('Please enter a valid email address'),
   body('password').trim().isLength({ min: 2 }).withMessage('Password must be at least 2 characters')

], userController.loginUser)

router.get('/profile', authMiddleware.authUser, userController.profile)

module.exports = router;

