const axios = require("axios");
require("dotenv").config();

const { getUniversityContext } = require("./contextService");

// In-memory session history
const sessionHistory = {};

const generateResponse = async (message, sessionId = "default") => {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey || apiKey === "your_groq_api_key_here") {
      return "Config Error: Please provide a GROQ_API_KEY in chatbot-backend/.env";
    }

    const universityContext = await getUniversityContext();

    if (!sessionHistory[sessionId]) {
      const systemPrompt = `
You are a highly intelligent and helpful assistant for EduSphere, a premium University Management System.
Your primary goal is to help students, faculty, and administrators with university-related queries.

GUIDELINES:
- Prioritize topics like academics, schedules, attendance, marks, and campus life.
- Be concise, professional, and friendly.
- If a user asks something completely unrelated to the university, platform, or academics (like pop culture, unrelated history, or generic trivia), politely redirect them by saying: "I'm specialized in EduSphere university matters. Do you have any questions about your academics, schedules, or our platform features?"

LIVE UNIVERSITY CONTEXT:
${universityContext}

Always base your answers on this data if the user asks about statistics, notices, or schedules.
      `.trim();

      sessionHistory[sessionId] = [
        { role: "system", content: systemPrompt }
      ];
    }

    sessionHistory[sessionId].push({ role: "user", content: message });

    // Keep history manageable
    if (sessionHistory[sessionId].length > 10) {
      sessionHistory[sessionId].splice(1, sessionHistory[sessionId].length - 10);
    }

    console.log(`Sending message to Groq: "${message.substring(0, 50)}..."`);

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: sessionHistory[sessionId],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    const reply = response.data.choices[0].message.content;
    sessionHistory[sessionId].push({ role: "assistant", content: reply });
    return reply;
  } catch (error) {
    console.error("Groq Service Error:", error.response?.data || error.message);
    return "Sorry, I am unable to process your request right now. Please try again later.";
  }
};

module.exports = { generateResponse };