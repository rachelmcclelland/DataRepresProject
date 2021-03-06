var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//import the mongoose module
var mongoose = require('mongoose');
const mongoDB = 'mongodb://admin:123abc@ds137863.mlab.com:37863/posts';

mongoose.connect(mongoDB);

//Define a schema
var Schema = mongoose.Schema;

var PostModelSchema = new Schema({
    name: String,
    dob: String,
    address: String
})

const PostModel = mongoose.model('post', PostModelSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.post('/api/posts', function(req, res){
    console.log("post successful");
    console.log(req.body.name);
    console.log(req.body.dob);
    console.log(req.body.address);

    PostModel.create({
        name: req.body.name,
        dob: req.body.dob,
        address: req.body.address
    });
})

app.get('/api/posts', function(req, res){

    PostModel.find(function(err, data){
        res.json(data);
    })

})

app.delete('/api/posts/:id', function(req, res){

    console.log(req.params.id);


    PostModel.deleteOne({_id: req.params.id}, function(err){

    })
})

app.get('/api/posts/:id', function(req, res){
    console.log(req.params.id);

    PostModel.findById(req.params.id, function(err, data){
        res.json(data);
    });
})

app.put('/api/posts/:id', function(req, res){
    console.log(req.params.id);

    console.log(req.body.name);
    console.log(req.body.dob);
    console.log(req.body.address);

    PostModel.findByIdAndUpdate(req.params.id, req.body, function(err, data){
        if(err)
            res.send(err)
        res.send(data);
    })
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
