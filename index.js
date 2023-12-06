const express = require('express');
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const passwordRoutes = require('./routes/passwordRoutes')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Database
const db = require('./config/db');
db.sync()

// Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/password', passwordRoutes)

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})