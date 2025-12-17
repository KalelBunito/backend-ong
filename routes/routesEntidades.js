const express = require('express')
const router = express.Router()
const {listaOngs, createOngs, updateOngs, deleteOngs} = require('../controllers/entidadeController.js')

router.get('/ongs', listaOngs);
router.post('/ongs', createOngs);
router.put('/ongs/:id', updateOngs);
router.delete('/ongs/:id', deleteOngs);

module.exports = router