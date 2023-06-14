const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//Crear el servidor
const app = express();

//Conectamos con la Base de Datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/login', require('./routes/usuario'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})