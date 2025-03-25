const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clientecontroller');

// Ruta para registrar un nuevo cliente
router.post('/registrar', clienteController.registrarCliente);

// Ruta para el login de clientes
router.post('/login', clienteController.loginCliente);

// Ruta para obtener todos los clientes
router.get('/mostrar', clienteController.verclientes);

// Ruta para editar la informacion de un cliente
router.put('/editar/:id', clienteController.editarCliente);


module.exports = router;
