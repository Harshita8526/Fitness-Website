const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshita@2003",
  database: "bee",
});

module.exports = connection;

