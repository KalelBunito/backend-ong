const express = require('express')
const router = express.Router()
const {listaOngs, createOngs} = require('../controllers/entidadeController.js')

router.get('/ongs', listaOngs);
router.post('/ongs', createOngs);
// router.put('/');
// router.delete('/');

module.exports = router