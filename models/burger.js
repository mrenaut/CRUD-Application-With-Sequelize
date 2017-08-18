// Exports the database functions for the controller 
//module.exports = list;*/



//sets up table in mySQL with burgers and devoured as columns with validation in each
module.exports = function (sequelize, DataTypes) {
	var Burgers = sequelize.define("Burgers", {
		burgername: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				len: {
					args: [4, 255],
					msg: 'Please enter a burger name with at least 4 characters.'
				}
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}

	});
	return Burgers;
}

// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");
//
//
//
//// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");
//
//var burgers = {
//	all: function(cb) {
//		orm.all("burgers", function(res) {
//			cb(res);
//		});
//	},
//	// The variables cols and vals are arrays.
//	create: function(cols, vals, cb) {
//		orm.create("burgers", cols, vals, function(res) {
//			cb(res);
//		});
//	},
//	update: function(objColVals, condition, cb) {
//		orm.update("burgers", objColVals, condition, function(res) {
//			cb(res);
//		});
//	},
////	delete: function(condition, cb) {
////		orm.delete("burgers", condition, function(res) {
////			cb(res);
////		});
////	}
//};
//
//// Export the database functions for the controller (catsController.js).
//module.exports = burgers;
