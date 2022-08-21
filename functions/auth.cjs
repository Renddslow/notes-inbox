const bcrypt = require('bcrypt');
const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

const PASS = process.env.PASS;

exports.handler = async (event) => {
    const { password } = JSON.parse(event.body);
    const isValid = await bcrypt.compare(password, PASS);
    
    if (!isValid) {
        return Promise.resolve({
            statusCode: 401,
        });
    }

    const generatedCode = '';
    await client.messages.create({
        body: ``,
        from: '+14023789202',
        to: process.env.PHONE_NUMBER,
    });

    return { statusCode: 200 };
};
