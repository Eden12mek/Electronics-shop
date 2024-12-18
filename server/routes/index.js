const express = require('express')

const router = express.Router()

const signUpUserController = require('../controller/signUpUserController')
const signInUserController = require('../controller/signInUserController')


router.post("/signup", signUpUserController)
router.post("/signin", signInUserController)

module.exports = router
