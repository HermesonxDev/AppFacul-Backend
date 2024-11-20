const userModel = require('../models/userModel')

exports.getAllUsers = () => {
    return userModel.getAll()
}

exports.createUser = (name, password, type) => {
    return userModel.create(name, password, type)
}

exports.updateUser = (id, name, password, type) => {
    return userModel.update(id, name, password, type)
}

exports.deleteUser = (id) => {
    return userModel.delete(id)
}