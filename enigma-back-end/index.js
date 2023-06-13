const express = require('express');
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/index.js');
require('dotenv').config();



//crar el objeto de express que es un servidor 
const app = express();
//Puerto
const port = process.env.PORT || 3000;

// Middleware para procesar datos de la solicitud POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Midelware para permitir el acceso a la API desde cualquier origen
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

///////////////////////////////////
//Rutas                         //
app.use(customerRoutes);
/////////////////////////////////


  //Poner a la escucha
  app.listen(port, () => {
    console.log(`Servidor Express iniciado en el puerto ${port}`);
  });



