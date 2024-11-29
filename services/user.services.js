const userModel = require("../models/user.model");


module.exports.createUser = async (name , email , password) =>{
    if(!name || !email || !password){
        throw new Error("all fields are required");
    }
    const existingUser = await userModel.findOne({email});

    if(existingUser){
        throw new Error("email already in linked with our platform please signin");
    }

    const user = await userModel.create({
        name,email,password
    });

    return user;
}