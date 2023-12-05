const express = require('express');

require('dotenv').config()

const app = express()

// Database
const db = require('./config/db');
db.sync()

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})