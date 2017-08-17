//Create the router for the app, and export the router at the end of your file.



var express = require("express");

var router = express.Router();

var db = require("../models");



// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
	db.Burgers.findAll({})
		.then(function(Burgers){
		res.render('index', {burgers: Burgers})

	})
	
});


router.post("/", function (req, res) {
	db.Burgers.create({
		burgername: req.body.burgername
	}).then(function(data){
		res.redirect("/");
	});	
});

router.post("/", function(req, res) {
	db.Burgers.create({burgername: req.body.item_name})
		.then(function(newBurgers){
		console.log(newBurgers);
		res.redirect('/');
	});
});


router.put("/:id", function(req, res) {
	var updateList = {
		devoured: true,
	}
	db.Burgers.update(updatePost,{
		where:{
			id: req.body.id
		}
	}).then(function (dbUpdate){
		res.json(dbUpdate);
	})
});


// Export routes for server.js to use.
module.exports = router;
