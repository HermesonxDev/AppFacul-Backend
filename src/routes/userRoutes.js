const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.post('/create', userController.createUser)
router.get('/getAll', userController.getAllUsers)
router.put('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUser)
router.post('/check', userController.checkUser);

module.exports = router