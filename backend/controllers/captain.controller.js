const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const { createCaptain } = require('../services/captain.service');
const blacklistModel = require("../models/blacklist.model");


module.exports.registerCaptain = async  (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, vehicle } = req.body;

    const existCaptain = await captainModel.findOne({ email });

    if(existCaptain){
        return res.status(400).json({ message: 'Captain already exists' });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain(name , email , hashPassword , vehicle.color , vehicle.plate , vehicle.capacity , vehicle.vehicleType);

    const token =await captain.generateAuthToken();

    res.status(200).json({token , captain});
}   

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {email , password} = req.body;

    const captain = await captainModel.findOne({ email });

    if(!captain){
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = captain.comparePassword(password);

    if(!isMatch){
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = await captain.generateAuthToken();

    res.cookie("token", token);
    res.status(200).json({token , captain});
}

module.exports.getProfile = async (req, res) => {
    res.status(200).json(req.captain);
}

module.exports.logout = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    await blacklistModel.create({token});

    res.clearCookie("token");
    res.status(200).json({message: "Logged out successfully"});
}