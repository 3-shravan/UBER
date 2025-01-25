const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
   fullname: {
      firstname: {
         type: String,
         required: true
      },
      lastname: {
         type: String,
         
      }
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
      select: false
   },

   socketid: {
      type: String,

   },
   role: {
      type: String,
      default: 'captain'
   },

   vehicle: {

      vehicleNo: {
         type: String,
         required: true
      },
      vehicleType: {
         type: String,
         required: true
      },
      vehicleCapacity: {
         type: Number,
         required: true
      },
      vehicleColor: {
         type: String,

      }

   }

})

captainSchema.methods.generateAuthToken = function () {
   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
   });

   return token;
}

captainSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
   return bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;