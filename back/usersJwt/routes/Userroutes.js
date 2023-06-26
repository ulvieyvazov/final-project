const express = require('express')
const router = express.Router()
const Usermodel = require('../models/Usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { protect } = require('../middleware/AuthMiddleware')

const RegisterUser = async (req, res) => {
    const { username, email, password } = req.body
    const Userexists = await Usermodel.findOne({ email })
    if (Userexists) {
        return res.status(404).json({ message: 'Email already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    const newUser = await Usermodel.create({
        username,
        email,
        password: hashed
    })

    if (newUser) {
        return res.status(200).json({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            token: generateToken(newUser.id)
        })
    }
    else {
        return res.status(401).json({ message: 'Invalid User data' })
    }
}

const LoginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await Usermodel.findOne({ email })

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({
            _id: user.id,
            email: user.email,
            password: user.password,
            token: generateToken(user.id)
        })
    }
    else {
        res.status(404).json({ message: 'Invalid User data' })
    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
}

const getMe = async (req, res) => {
    await res.status(200).send(req.user)
}
const getLo = async (req, res) => {
    await res.status(200).send(req.user)
}


const getRe = async (req, res) => {
    await res.status(200).send(req.user)
}

router.post('/', RegisterUser)
router.get('/', getRe)
router.post('/login', LoginUser)
router.get('/login', getLo)
router.get('/getMe', protect, getMe)

module.exports = router