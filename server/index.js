const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./src/configs/config').get();
const PORT = config.PORT;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
        });
    });
});

app.listen(PORT,()=>{
    console.log("It's Working !")
});