const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
   fullname: {
      firstname: {
         type: String,
         required: true,
         minLength: [3, 'First name must be at least 3 characters']
      },
      lastname: {
         type: String,
      }
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,

   },
   password: {
      type: String,
      required: true,
      select: false
   },
   role: {
      type: String,
      default: 'user'
   }

})

userSchema.methods.generateAuthToken = function () {
   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
   return token;
}


userSchema.statics.hashPassword = async function (password) {
   return await bcrypt.hash(password, 10)
}

userSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;