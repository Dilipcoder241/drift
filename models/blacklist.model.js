const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expire:86400 //24 hours in seconds
    }
})

module.exports = mongoose.model('blacklisttoken' , blacklistTokenSchema);