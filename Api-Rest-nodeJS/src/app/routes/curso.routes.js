const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/curso');

router.get('/',cursoController.list);
router.get('/item/:id',cursoController.item);
router.post('/add/',cursoController.add);
router.post('/update/',cursoController.update);
router.post('/delete/:id',cursoController.delete);

module.exports= router;
