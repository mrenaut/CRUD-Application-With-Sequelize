//Create the router for the app, and export the router at the end of your file.



var express = require("express");

var router = express.Router();

var db = require("../models");



// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
	db.burgers.findAll({})
		.then(function(burgers_db){
		res.render('index', burgers_db)

	})
	
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////need to update this section
router.post("/", function (req, res) {
	db.burgers.create({
		burgername: req.body.burgername
	}).then(function(data){
		res.json(data);
		res.redirect("/");
	});	
});

router.post("/", function(req, res) {
	db.burgers.create({item_name: req.body.item_name})
		.then(function(newItem){
		console.log(newBurger);
		res.redirect('/');
	});
});







router.put("/:id", function(req, res) {
	var updateList = {
		got: true,
	}
	db.burgers.update(updatePost,{
		where:{
			id: req.body.id
		}
	}).then(function (dbUpdate){
		res.json(dbUpdate);
	})
});


// Export routes for server.js to use.
module.exports = router;
