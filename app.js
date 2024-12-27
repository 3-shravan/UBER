const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const cors = require('cors')
const connectToDatabse = require('./db/db')
const userRoutes = require('./routes/user.routes')

connectToDatabse();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
   res.send('helo World')
})

app.use('/', userRoutes)

module.exports = app