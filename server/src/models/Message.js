const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    message:{
        type:String,
        required:true,
    },
});

const Message = mongoose.model('Message',messageSchema);

module.exports = { Message };