const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

const cors = require('cors')
const connectToDatabse = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

connectToDatabse();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



app.get('/', (req, res) => {
   res.send('test Success')
})

app.use('/', userRoutes)
app.use('/captain', captainRoutes)

module.exports = app