var express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var app = express();

const schemaName = new Schema({
    Name: String,
    DOB: Date,
    Mobile: Number,
    time: Number
}, {
    collection: 'Nambi'
});

const Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://54.163.205.165:8969/First');

mongoose.promise = global.promise;

const port = process.env.PORT || 2020;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
var query;
app.get('/save', cors(), function(req, res) {
    var query = req.query;

    var savedata = new Model({
        'Name': query.Name,
        'DOB' : query.DOB,
        'Mobile': query.Mobile,
        'time': Math.floor(Date.now() / 1000) 
    })
    console.log(savedata, "11111111111111111111111",req.query)
    savedata.save(function(err, result) {
        if (err) throw err;

        if(result) {
            res.json(result)
        }
    })
router.get('/findall', function(req, res) {
   StudentModel.find(function(err, data) {
       if(err){
           console.log(err);
       }
       else{
           res.send(data);
       }
   });  
});

var savedata = new Model({
    'request': query,
}).save(function(err, result) {
    if (err) throw err;

    if(result) {
        res.json(result)
    }
})
})

