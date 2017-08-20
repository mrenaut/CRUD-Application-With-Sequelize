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
