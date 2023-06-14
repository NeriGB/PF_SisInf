// Rutas para producto
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// api/productos
router.get('/:id', usuarioController.obtenerUsuario);

module.exports = router;