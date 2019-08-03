const express = require('express');
const mongoose = require('mongoose');
const socket = require('socket.io');
const config = require('./src/configs/config').get();
const port = config.PORT ;

const app = express();
const server = app.listen(port,()=>{
    console.log("It's Working !")
});

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE,
    { useNewUrlParser: true }
);

const io = socket(server);

const {Message} = require('./src/models/Message');

io.on('connection', (socket) => {
    socket.on('submit', function(data){
        const message = new Message(data);
        message.save((err,doc)=>{
            if(err){
                return io.emit("ERROR",err);
            }
            io.emit("DONE",data);
        });
    });
});