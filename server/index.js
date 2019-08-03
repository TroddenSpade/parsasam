const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./src/configs/config').get();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true
});

const {Message} = require('./src/models/Message');

// POST
app.post('/webapi/message',(req,res)=>{
    const message = new Message(req.body);
    message.save((err,doc)=>{
        if(err){
            return res.status(400).json({
                sent:false,
                err:err,
            });
        }
        res.status(200).json({
            sent:true,
            user:doc
        });
    });
});