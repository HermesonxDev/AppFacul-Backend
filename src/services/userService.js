const userModel = require('../models/userModel')

exports.getAllUsers = () => {
    return userModel.getAll()
}

exports.createUser = (name, email, password, type) => {
    return userModel.create(name, email, password, type)
}

exports.updateUser = (id, name, email, password, type) => {
    return userModel.update(id, name, email, password, type)
}

exports.deleteUser = (id) => {
    return userModel.delete(id)
}

exports.checkUserExists = (email) => {
    return userModel.findByEmail(email);
};