const userService = require('../services/userService')

exports.getAllUsers = (req, res) => {
    const result = userService.getAllUsers()
    res.json(result)
}

exports.createUser = (req, res) => {
    const { name, email, password, type } = req.body
    const result = userService.createUser(name, email, password, type)
    res.status(201).json(result)
}

exports.updateUser = (req, res) => {
    const { id } = req.params
    const { name, email, password, type } = req.body
    const result = userService.updateUser(id, name, email, password, type)
    res.json(result)
}

exports.deleteUser = (req, res) => {
    const { id } = req.params
    const result = userService.deleteUser(id)
    res.json(result)
}

exports.checkUser = (req, res) => {
    const { email } = req.body;
    const result = userService.checkUserExists(email);

    if (result.exists) {
        res.status(200).json({ message: "Usuário encontrado", user: result.user });
    } else {
        res.status(404).json({ message: "Usuário não encontrado" });
    }
};