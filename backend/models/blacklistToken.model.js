const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
   token: {
      type: String,
      required: true,
      unique: true

   },
   createdAt: {
      type: Date,
      default: Date.now,
      expires: process.env.JWT_EXPIRES_IN_MS
   }
})

const backlistTokenModel=mongoose.model('blacklistTokens' , blacklistTokenSchema);

module.exports=backlistTokenModel;