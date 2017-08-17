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

////////////////////////////////////////////////////////////////////////////////////////////update this,  not working
router.put("/:id", function(req, res) {
	var updateBurgers = {
		devoured: true,
	}
	db.Burgers.update(updateBurgers,{
		where:{
			id: req.body.id
		}
	}).then(function (Burgers){
		res.json(Burgers);
	})
});







//////////////////////////////////////////////////////////////////////////////////////////////db.Todo.update({
//text: req.body.text,
//	complete: req.body.complete
//}, {
//	where: {
//		id: req.body.id
//	}
//}).then(function(dbTodo) {
//	res.json(dbTodo);
//})





// Export routes for server.js to use.
module.exports = router;
