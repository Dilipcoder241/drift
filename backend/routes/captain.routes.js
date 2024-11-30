const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/auth.middleware")

router.post('/register', [
    body('name').isLength({min:3}).withMessage("name should be atleast 3 characters long"),
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min:3}).withMessage("password should be atleast 3 characters long"),
    body('vehicle.color').isLength({min:3}).withMessage("color should be atleast 3 characters long"),
    body('vehicle.plate').isLength({min:3}).withMessage("plate should be atleast 3 characters long"),
    body('vehicle.capacity').isInt({min:1}).withMessage("capacity should be greater or equal to 1"),
    body('vehicle.vehicleType').isIn(["car", "auto", "motercycle"]).withMessage("Invalid vehicle type"),
] , captainController.registerCaptain );


router.post('/login' , [
    body('email').isEmail().withMessage("invalid email"),
    body('password').isLength({min:3}).withMessage("password should be atleast 3 characters long"),
] , captainController.loginCaptain);

router.get("/profile" , authMiddleware.authCaptain , captainController.getProfile);

router.get("/logout" , authMiddleware.authCaptain , captainController.logout);

module.exports = router;