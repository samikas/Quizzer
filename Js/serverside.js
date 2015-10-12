var express = require('express');
var expressApp = express();
var bodyParser = require('body-parser');

expressApp.use(bodyParser.json());

expressApp.post('/team', function(req, res, next) {
    console.log(req.body);
    res.json("success");


});

var server = expressApp.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var teamSchema = new mongoose.Schema({
    name: {type: String,
            required: true}

    });



var team = mongoose.model('Name', teamSchema);

var testTeam = new team({name:"banana"});

module.exports = teamSchema; //we export the schema, so we can use it in other schemas
