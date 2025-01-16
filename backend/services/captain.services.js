const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ firstname, lastname, email, password, vehicleNo, vehicleType, vehicleCapacity, vehicleColor }) => {
      if (!firstname || !email || !password || !vehicleNo || !vehicleType || !vehicleCapacity) {
            throw new Error('All Fields are required')
      }
      const captain =await captainModel.create({
            fullname: {
                  firstname,
                  lastname
            },
            email,
            password,
            vehicle: {
                  vehicleNo,
                  vehicleType,
                  vehicleCapacity,
                  vehicleColor
            }
      })

      return captain;

}