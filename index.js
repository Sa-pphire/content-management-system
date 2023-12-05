const express = require('express');
const userRoutes = require('./routes/userRoutes')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Database
const db = require('./config/db');
db.sync()

// Routes
app.use('/api/v1/user', userRoutes);

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})