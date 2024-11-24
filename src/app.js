require('dotenv').config()

const express = require('express')
const cors = require("cors")

const app = express()

const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use(cors())
app.use('/users', userRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Ocorreu um erro no servidor'})
})

module.exports = app