const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


//controller

const UsrController= require('./../controller/Users')




//Rutas
router.get('/test', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});

router.post('/login', UsrController.singUp);

module.exports = router;