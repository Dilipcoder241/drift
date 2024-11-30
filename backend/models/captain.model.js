const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        minLength: [3 ,"name should be 3 characters long"]
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength: [3, "password should be 3 characters long"]
    },
    socketId:{
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type: String,
            required: true
        },
        capacity:{
            type: Number,
            required: true,
            min:1
        },
        plate:{
            type: String,
            required: true,
            minLength: [3 , "plate should be 3 characters long"]
        },
        vehicleType:{
            type:String,
            required: true,
            enum: ['car', 'auto', 'motorcycle']
        }
    },

    location:{
        lat:{
            type: Number
        },
        lng:{
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ id: this._id }, process.env.SECRET_KEY, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async(password) =>{
    return await bcrypt.hash(password, 10);
}

module.exports = mongoose.model('captain', captainSchema);