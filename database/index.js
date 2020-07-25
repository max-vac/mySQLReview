const mysql = require('mysql');
// https://www.npmjs.com/package/mysql

// TODO: establish connection

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'foodDB'
});

db.connect();

module.exports = db;

