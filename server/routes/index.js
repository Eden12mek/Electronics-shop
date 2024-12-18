const express = require('express')

const router = express.Router()

const signUpUserController = require('../controller/signUpUserController')

router.post("/signup",signUpUserController)

module.exports = router
