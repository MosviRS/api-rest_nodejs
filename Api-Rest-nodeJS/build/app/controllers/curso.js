"use strict";

var mysqlConnection = require("../lib/database");

var mysqlOperations = require("../lib/db-operations");

var tables = require("../config/constants.js");

var cursoController = {};

cursoController.list = function (req, res) {
  mysqlOperations.getList({
    table: tables.cursos
  }, function (err, rows) {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

cursoController.item = function (req, res) {
  var id = req.params.id;
  mysqlOperations.getItem(id, {
    table: tables.cursos,
    field: 'cursosID'
  }, function (err, rows) {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
};

cursoController.add = function (req, res) {
  var data = req.body;
  var id = req.params.id;
  var query = "\n  CALL cursoAddEdit(?,?,?,?,?);\n";
  mysqlOperations.addItem(id, data, query, function (err, rows) {
    if (!err) {
      res.json({
        status: "Curso Guardado"
      });
    } else {
      console.log(err);
    }
  });
};

cursoController.update = function (req, res) {
  var data = req.body;
  var id = req.params.id;
  var query = "\n  CALL cursoAddEdit(?,?,?,?,?);\n";
  mysqlOperations.updateItem(id, data, query, function (err, rows) {
    if (!err) {
      res.json({
        status: "Curso Actualizado"
      });
    } else {
      console.log(err);
    }
  });
};

cursoController["delete"] = function (req, res) {
  var id = req.params.id;
  var variables = {
    table: 'cursos',
    field: 'cursosID'
  };
  mysqlOperations.deleteItem(variables, id, function (err, rows) {
    if (!err) {
      res.json({
        status: "Curso Eliminado"
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = cursoController;