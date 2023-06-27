const express = require('express')
const router = express.Router()
const { register, login } = require("../controllers/AuthController");

router.post('/',register)
router.get('/')
router.post('/login',login)
router.get('/login',login)

module.exports=router