
// get the client
const mysql = require('mysql2');

require("dotenv").config();


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "expense_tracker_app",
  insecureAuth : true
});

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log("MySQL has been connected!!!");
  console.log(err);
});

module.exports = db;
