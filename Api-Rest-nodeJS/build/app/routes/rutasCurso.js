"use strict";

var express = require('express');

var router = express.Router();

var cursoController = require('../controllers/curso');

router.get('/', cursoController.list);
router.get('/item/:id', cursoController.item);
router.post('/add/:id', cursoController.add);
router.post('/update/:id', cursoController.update);
router.post('/delete/:id', cursoController["delete"]);
module.exports = router;