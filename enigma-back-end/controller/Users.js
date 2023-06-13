
const SingUpService= require('../service/loginUser');


module.exports = {

    singUp: async (req,res) => {
        const username = req.body.username;
        const password = req.body.password;
        let respuesta= await SingUpService.SingUp(username,password);
        res.send(respuesta);
      }
}