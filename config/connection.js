var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	var connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: require("./password.js"),
		database: "burgers_db"
	});
};

//making sure that it is connecting to mySQL
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadId);
});

module.exports = connection;