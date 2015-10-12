var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var teamSchema = new mongoose.Schema({
    name: {type: String,
            required: true}

    });

var team = mongoose.model('Name', teamSchema);

var testTeam = new team({name:"banana"});

module.exports = teamSchemaSchema; //we export the schema, so we can use it in other schemas
