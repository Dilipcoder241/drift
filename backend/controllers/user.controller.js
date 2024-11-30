const userModel = require('../models/user.model');
const { validationResult } = require("express-validator");
const { createUser } = require('../services/user.service');
const blacklistModel = require('../models/blacklist.model');


module.exports.registerUser = async (req ,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { name , email , password } = req.body;

    const existUser = userModel.findOne({email});
    if(existUser){
        res.status(400).json({message:"user already exist"});
    }

    const hashPassword = await userModel.hashPassword(password);

    const user = await createUser(name , email , hashPassword);

    const token = await user.generateAuthToken();
    
    res.status(200).json({token , user});
}

module.exports.loginUser = async (req , res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const user = await userModel.findOne({email:req.body.email}).select("+password");

    if(!user){
        return res.status(401).json({error:"Invalid Credentials"});
    }

    const isMatch = await user.comparePassword(req.body.password);

    if(!isMatch){
        return res.status(401).json({error:"Invalid Credentials"});
    }

    const token = await user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({token , user});
}

module.exports.getProfile = async(req, res)=>{
    res.status(200).json({user:req.user});
}

module.exports.logout = async(req , res)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    await blacklistModel.create({token});

    res.clearCookie('token');

    res.status(200).json({message: "Logged out successfully"});
}