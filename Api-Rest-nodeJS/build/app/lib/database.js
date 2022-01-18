"use strict";

var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'mosvi',
  password: 'Popochas.ch14',
  database: 'cursos'
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('data abse conectada');
  }
});
module.exports = mysqlConnection;