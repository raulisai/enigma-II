const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


//controller

const UsrController= require('./../controller/Users')
const chatCtl = require('./../controller/chatGpt.js');



//Middleware para verificar el token
function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader;
    if (token == null) return res.sendStatus(403);
    jwt.verify(token, "secret_key", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}

//Rutas
router.get('/test', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});
router.post('/login', UsrController.singUp);

//Rutas protegidas

router.post('/api/queryChat',verifyToken, chatCtl.chatConsultModel)

module.exports = router;