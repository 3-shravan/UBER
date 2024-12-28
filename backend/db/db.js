const mongoose = require('mongoose')

function connectToDatabase() {
   mongoose.connect(process.env.MONGO_URI)
      .then(() => {
         console.log('Connected to database')
      })
      .catch(err => console.log(err))
}

module.exports = connectToDatabase