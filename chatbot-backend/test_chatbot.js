const axios = require('axios');

async function testChatbot() {
  try {
    const response = await axios.post('http://localhost:5002/api/chat', {
      message: 'How many students are currently enrolled in the university?'
    });
    console.log('Chatbot Response:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Chatbot Error:', error.response?.data || error.message);
  }
}

testChatbot();
