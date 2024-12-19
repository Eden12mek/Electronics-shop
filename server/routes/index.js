const express = require('express')

const router = express.Router()

const signUpUserController = require('../controller/user/signUpUserController')
const signInUserController = require('../controller/user/signInUserController')
const userLogout = require('../controller/user/userLogout')


router.post("/signup", signUpUserController)
router.post("/signin", signInUserController)
router.get("/userLogout",userLogout)


module.exports = router
