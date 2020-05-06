const moment = require('moment');

let greetings = {
    'en': 'Hello',
    'hi': 'Namaste',
    'fr': 'Bonjoure'
}

exports.handler = async (event, context) => {

    const {
        name
    } = event.pathParameters;

    const {
        lang,
        ...info
    } = event.queryStringParameters;

    let greeting = greetings[lang] ? greetings[lang] : greetings['en'];

    const response = {
        statusCode: 200,
        body: {
            message: `${greeting} ${name}`,
            info
        }
    }

    console.log(response);

    return response;
}