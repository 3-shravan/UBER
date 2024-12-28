const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');
const authMiddleware = require('../middleware/auth.middleware')



router.post('/register', [
   body('fullname.firstname').trim().isLength({ min: process.env.MIN_NAME_LENGTH }).withMessage(`First name must be at least ${process.env.MIN_NAME_LENGTH} characters`),
   body('email').trim().isEmail().withMessage('Please enter a valid email address'),
   body('password').trim().isLength({ min: process.env.MIN_PASSWORD_LENGTH }).withMessage(`Password must be at least ${process.env.MIN_PASSWORD_LENGTH} characters`),
], userController.registerUser)

router.post('/login', [
   body('email').trim().isEmail().withMessage('Please enter a valid email address'),
   body('password').trim().isLength({ min: process.env.MIN_PASSWORD_LENGTH }).withMessage(`Password must be at least ${process.env.MIN_PASSWORD_LENGTH} characters`),
], userController.loginUser)

router.get('/profile', authMiddleware.authUser, userController.profile)

router.get('/logout', authMiddleware.authUser, userController.logout)

module.exports = router;

