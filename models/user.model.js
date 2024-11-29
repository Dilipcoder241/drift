const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3 , "User name should be at least 3 characters"],
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:[3 , "password should be at least 3 characters"],
        select:false
    },

    socketId:{
        type:String,
    }

})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ id: this._id }, process.env.SECRET_KEY , {expiresIn:'24h'});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password , this.password);
}

userSchema.statics.hashPassword = async(password) =>{
    return await bcrypt.hash(password , 10);
}

module.exports = mongoose.model('user' , userSchema);