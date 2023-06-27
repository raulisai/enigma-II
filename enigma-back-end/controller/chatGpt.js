const chatModule = require('../service/chatConsult'); // Ruta al módulo abstraído



module.exports = {

   chatConsultModel: async (req, res) =>{
    const { message } = req.body;

    try {
        const response = await chatModule.chatConsultModel(message);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al procesar la solicitud' });
    }
}



}