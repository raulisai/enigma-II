const jwt = require('jsonwebtoken');
const db = require('./connectDB');

const encrypt = require('./encrypt');

module.exports = {
  SingUp: async (username, password) => {
    var resp = { msg: 'Error' };

    if (!username || !password) {
      resp = { msg: 'Please include all fields' };
    } else {
      try {
        // Conecta a la base de datos
        await db.conectarDB();

        // Ejemplo de consulta
        const consulta = `SELECT * FROM usuarios WHERE nameuser = '${username}'`;
        const [resultados] = await db.connection.promise().query(consulta);

        console.log('Resultados de la consulta:', resultados);

        let user = resultados[0].nameuser;
        let passw = resultados[0].passw;
        let id = resultados[0].id;
        //encryptar password
        let isMatch = encrypt.comparePassword(password, passw);

        if (username == user && isMatch) {
          const token = await jwt.sign({ username,id }, 'secret_key');
          resp = { msg: 'success', token: token };
        } else {
          resp = { msg: 'Error Username or Password' };
        }
      } catch (error) {
        console.error('Error al ejecutar la consulta:', error.message);
        resp = { msg: 'Error' };
      }
    }

    return resp;
  },
};
