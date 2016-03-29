var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var path = require("path");

app.use(express.static(path.join(__dirname, "bower_components")));

app.use(express.static(path.join(__dirname, 'client')));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

var server = app.listen(6789, function() {
    console.log("listening on port 6789");
})
