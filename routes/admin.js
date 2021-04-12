const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')

router.get('/', adminController.getTodos)

router.post('/createTodo', adminController.createTodo)

router.put('/markComplete', adminController.markComplete)

router.put('/markIncomplete', adminController.markIncomplete)

router.delete('/deleteTodo', adminController.deleteTodo)

module.exports = router