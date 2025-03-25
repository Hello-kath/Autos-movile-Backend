const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Opción avanzada: configurar CORS con reglas específicas
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

const alquilerR = require('./routes/alquilerroutes');
const autosR = require('./routes/autosroutes');
const clientesR = require('./routes/clienteroutes');

// Definir el puerto con un valor predeterminado
const PORT = process.env.PORT || 6000;

// Middleware para analizar JSON
app.use(express.json());

// Prefijos para cada conjunto de rutas
app.use('/api/alquiler', alquilerR);
app.use('/api/autos', autosR);
app.use('/api/clientes', clientesR);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
