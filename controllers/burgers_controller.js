
//Create the router for the app, and export the router at the end of your file.



var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	burgers.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	burgers.create([
		"burgername", "devoured"
	], [
		req.body.burgername, req.body.devoured
	], function() {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burgers.update({
		devoured: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

router.delete("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burgers.delete(condition, function() {
		res.redirect("/");
	});
});

// Export routes for server.js to use.
module.exports = router;

