const express = require('express');
const router = express.Router();

const autoController = require('../controller/autoscontroller');

// Ruta para obtener autos disponibles
router.get('/mostrar', autoController.autosDisponibles);

// Ruta para registrar un nuevo auto
router.post('/registrar', autoController.registrarAuto);

// Ruta para ver la informacion de un auto
router.get('/verInfo/:id', autoController.infoAuto);

module.exports = router;
