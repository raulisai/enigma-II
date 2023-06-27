const mysql = require('mysql2');
require('dotenv').config();


// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: process.env.HOST, // Cambia esto por la dirección IP o el nombre del host de tu servidor MySQL
  user: process.env.USER, // Cambia esto por el nombre de usuario de tu base de datos
  password: process.env.PASSW, // Cambia esto por la contraseña de tu base de datos
  database: process.env.DATABASE // Cambia esto por el nombre de tu base de datos
});


// Función para conectar a la base de datos
function conectarDB() {
  connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error.message);
      return;
    }
    console.log('Conexión exitosa a la base de datos MySQL.');
  });
}

// Función para desconectar de la base de datos
function desconectarDB() {
  connection.end((error) => {
    if (error) {
      console.error('Error al desconectar de la base de datos:', error.message);
      return;
    }
    console.log('Desconexión exitosa de la base de datos MySQL.');
  });
}



// Exporta la conexión y las funciones para usarlas desde otros módulos
module.exports = {
  connection,
  conectarDB,
  desconectarDB
};
