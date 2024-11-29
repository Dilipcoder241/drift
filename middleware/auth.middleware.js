const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklist.model');


module.exports.authUser = async(req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    const isblacklisted = await blacklistModel.findOne({token: token});
    
    if(isblacklisted){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const {id} = jwt.verify(token , process.env.SECRET_KEY);
        const user = await userModel.findById(id);
        
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message: 'Unable to find the user'});
    }
}