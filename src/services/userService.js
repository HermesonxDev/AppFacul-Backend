const userModel = require('../models/userModel')

exports.getAllUsers = () => {
    return userModel.getAll()
}

exports.createUser = (email, password, type) => {
    return userModel.create(email, password, type)
}

exports.updateUser = (id, email, password, type) => {
    return userModel.update(id, email, password, type)
}

exports.deleteUser = (id) => {
    return userModel.delete(id)
}

exports.checkUserExists = (email) => {
    return userModel.findByEmail(email);
};