require('dotenv').config();
const { sendWhatsAppMessage } = require('./utils/twilio');

const testTwilio = async () => {
    try {
        console.log("Attempting to send test WhatsApp message...");
        // Re-using the prompt snippet content
        const sid = await sendWhatsAppMessage('+919512746758', { "1": "12/1", "2": "3pm" });
        console.log(`Test passed. Message SID: ${sid}`);
    } catch (err) {
        console.error("Test failed:", err);
    }
};

testTwilio();
