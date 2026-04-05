const axios = require("axios");

const BASE_URL = "http://localhost:5002/api/chat";

const testQueries = [
  { name: "FAQ Layer", query: "What is EduSphere?" },
  { name: "DB Layer (Intent)", query: "Show my attendance" },
  { name: "LLM Layer (University)", query: "Tell me about course registration" },
  { name: "LLM Redirection (Unrelated)", query: "Who is the best football player?" }
];

async function runTests() {
  console.log("🚀 Starting Hybrid Chatbot Logic Tests...\n");

  for (const t of testQueries) {
    try {
      console.log(`Testing [${t.name}]: "${t.query}"`);
      const response = await axios.post(BASE_URL, { message: t.query });
      console.log(`Source: ${response.data.source || "N/A"}`);
      console.log(`Reply: ${response.data.response}\n`);
    } catch (error) {
      console.error(`❌ Error in [${t.name}]:`, error.response?.data || error.message);
    }
  }
}

runTests();
