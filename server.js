// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

//sets up use method override and set up handlebars as engine

app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//the css and image
app.use(express.static(path.join(__dirname, "/public")));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));



// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


//Sets up server to listen on port 3000 and console logs a message to make sure it's working
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});






















