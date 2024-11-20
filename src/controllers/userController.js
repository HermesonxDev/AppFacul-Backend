const userService = require('../services/userService')

exports.getAllUsers = (req, res) => {
    const result = userService.getAllUsers()
    res.json(result)
}

exports.createUser = (req, res) => {
    const { name, password, type } = req.body
    const result = userService.createUser(name, password, type)
    res.status(201).json(result)
}

exports.updateUser = (req, res) => {
    const { id } = req.params
    const { name, password, type } = req.body
    const result = userService.updateUser(id, name, password, type)
    res.json(result)
}

exports.deleteUser = (req, res) => {
    const { id } = req.params
    const result = userService.deleteUser(id)
    res.json(result)
}