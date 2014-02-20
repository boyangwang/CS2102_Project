var express = require("express");
var app = express();
var server = require("http").createServer(app);

var routes = require('./routes');
var config = require("./config/config.js");

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

// feed pages
app.get("/", routes.index);

server.listen(config.port);
console.log("Express is listening on port: " + config.port
			+ " in " + config.env + " mode");
