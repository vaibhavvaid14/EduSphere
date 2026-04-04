const { getFaqResponse } = require("../services/faqService");
const { getPersonalizedData } = require("../services/dbService");
const { getIntent } = require("../services/intentService");
const { generateResponse } = require("../services/aiService");

const handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.user?.id;

    console.log(`\n--- [CHATBOT DEBUG] ---`);
    console.log(`Message: "${message}"`);
    console.log(`User ID: ${userId || "NOT LOGGED IN"}`);

    if (!message) return res.status(400).json({ error: "Message is required" });

    // PRIORITY 1: PERSONALIZED DATABASE QUERIES (Attendance, Marks, Profile)
    const intent = getIntent(message);
    const personalizedIntents = ["attendance", "marks", "profile"];
    
    if (personalizedIntents.includes(intent)) {
      console.log(`[PRIORITY] Detected Personal Intent: ${intent}`);
      if (!userId) {
        console.log(`[AUTH] User not logged in, returning auth-required message.`);
        return res.json({ 
          response: "I can see you're asking about your personal records. Please log in to your EduSphere account so I can securely fetch your data.",
          source: "system-auth-required" 
        });
      }

      console.log(`[DB] Fetching data for User: ${userId}`);
      const dbResponse = await getPersonalizedData(userId, intent);
      return res.json({ response: dbResponse, source: "database" });
    }

    // PRIORITY 2: FAQ LAYER
    console.log(`[FLOW] Checking FAQ...`);
    const faqResponse = getFaqResponse(message);
    if (faqResponse) {
      return res.json({ response: faqResponse, source: "faq" });
    }

    // PRIORITY 3: GENERAL AI FALLBACK
    console.log(`[FLOW] Falling back to LLM...`);
    const aiReply = await generateResponse(message);
    res.json({ response: aiReply, source: "ai" });

  } catch (error) {
    console.error("Chat Controller Error:", error);
    res.status(500).json({ response: "I'm having trouble processing your records right now.", error: error.message });
  }
};

module.exports = { handleChat };