const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller');

router.post("/register" , [
    body('name').isLength({min:3}).withMessage("name should be atleast 3 characters long"),
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min:3}).withMessage("password should be atleast 3 characters long"),
] ,  userController.registerUser );


router.post("/login" , [
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min:3}).withMessage("password should be atleast")
] , userController.loginUser);



module.exports = router;