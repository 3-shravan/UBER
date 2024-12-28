const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model')


module.exports.authUser = async (req, res, next) => {
   const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
   if (!token) {
      return res.status(401).json({ message: 'Unauthorization' })
   }
   const isblacklistedToken = await blacklistTokenModel.findOne({ token: token })

   if (isblacklistedToken) {
      return res.status(401).json({ message: 'Unauthorization' })
   }

   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const user = await userModel.findById(decoded._id)
      req.user = user;
      next()

   } catch (error) {
      return res.status(401).json({ message: 'Unauthorization' })

   }
}