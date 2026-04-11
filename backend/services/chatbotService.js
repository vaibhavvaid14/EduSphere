const axios = require("axios");

const CHATBOT_URL = process.env.CHATBOT_URL || "https://edusphere-chatbot-backend.onrender.com";

const sendToChatbot = async (message, sessionId, authHeader) => {
    const headers = {};
    if (authHeader) {
        headers.Authorization = authHeader;
    }

    const res = await axios.post(`${CHATBOT_URL}/api/chat`, {
        message,
        sessionId
    }, { headers });

    return res.data;
};

module.exports = { sendToChatbot };