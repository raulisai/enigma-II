const request = require('request');

async function chatConsultModel(message) {
    let token = process.env.API_KEY;

    try {
        var options = {
            'method': 'POST',
            'url': 'https://api.openai.com/v1/completions',
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "model": "text-davinci-003",
                "prompt": message,
                "max_tokens": 400,
                "temperature": 0,
                "stop": "['\n']"
            })
        };

        const response = await new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) {
                    reject(error);
                } else {
                    resolve(response);
                }
            });
        });

        let respuesta = response.body;
        const json = JSON.parse(respuesta.replace(/\\/g, ''));

        let text = json.choices[0].text.replace(/\\n|n/g, "");

        return { message: text };
    } catch (error) {
        console.log(error);
        throw new Error('Error al procesar la solicitud');
    }
}

module.exports = {
    chatConsultModel
};
