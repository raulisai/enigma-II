const jwt = require('jsonwebtoken');

module.exports={

    SingUp: async (username, password) => {

        var resp= {msg: 'Error'};

        if ( !username || !password) {
            resp = { msg: 'Please include all fields' };
        } else {
    
            if (username == 'admin' && password == 'monroy') {
    
                await jwt.sign({ username, password }, 'secret_key', (err, token) => {
                    if (err) {
                        resp = { msg: 'Error: '+ err };
                    }
                    else {
                        resp = { msg: 'success', token: token };
                    }
                })
    
            } else {
                resp = { msg: 'Error Username or Password' }
            }
        }
        return resp;
    }

}