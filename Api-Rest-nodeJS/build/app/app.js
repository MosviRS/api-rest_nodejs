"use strict";

var express = require('express');

var app = express();

var path = require('path'); //Settings


app.set('port', process.env.PORT || 3000); //Middleware

app.use(express.json()); //Routes

app.use('/cursos', require('./routes/rutasCurso')); //app.use('/usuarios',require('./routes/usuarios'));
//Starting Server

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.listen(app.get('port'), function () {
  console.log("Example app listening at http://localhost:".concat(app.get('port')));
});