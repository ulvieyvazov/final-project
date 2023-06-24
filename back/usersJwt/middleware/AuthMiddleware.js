const Usermodel = require('../models/Usermodel')
const jwt = require('jsonwebtoken')
const protect = async (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        let token

        token = req.headers.authorization.split(" ")[1]

        const decoded = await jwt.verify(token,process.env.JWT_SECRET)

        req.user = await Usermodel.findById(decoded.id).select('-password')

        next()
    }
    else{
        res.status(401).json({message:'Not authorized'})
    }

    
}

module.exports={protect}