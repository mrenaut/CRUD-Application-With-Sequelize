//Create the router for the app, and export the router at the end of your file.



var express = require("express");

var router = express.Router();

var db = require("../models");



// puts all burgers onto the page when the homepage loads

router.get("/", function(req, res) {
	db.Burgers.findAll({})
		.then(function(Burgers){
		res.render('index', {burgers: Burgers})
	})
});

// puts all burgers onto the page when the homepage loads
router.post("/", function (req, res) {
	db.Burgers.create({
		burgername: req.body.burgername
	}).then(function(data){
		res.redirect("/");
	});	
});


router.put('/:id',(req, res)=> {
	db.Burgers.update({ devoured: req.body.devoured }, {
		fields: ['devoured'],
		where: { id: req.params.id }
	}).then(data => {
		res.redirect('/')
	});
});






// Export routes for server.js to use.
module.exports = router;
