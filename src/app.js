require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const userRoutes = require('./routes/userRoutes')

app.use('/users', userRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Ocorreu um erro no servidor'})
})

module.exports = app