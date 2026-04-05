const fs = require('fs');
const path = require('path');

const faqDataPath = path.join(__dirname, '../data/faq.json');

const normalizeText = (text) => {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove punctuation
        .trim();
};

const getFaqResponse = (userInput) => {
    try {
        const faqs = JSON.parse(fs.readFileSync(faqDataPath, 'utf8'));
        const normalizedInput = normalizeText(userInput);

        for (const faq of faqs) {
            const normalizedQuestion = normalizeText(faq.question);
            
            // Check for exact normalized match or partial inclusion
            if (normalizedQuestion === normalizedInput || normalizedInput.includes(normalizedQuestion) || normalizedQuestion.includes(normalizedInput)) {
                // To avoid false positives for very short inputs, ensure a minimum length match
                if (normalizedInput.length > 3) {
                    return faq.answer;
                }
            }
        }
        return null;
    } catch (error) {
        console.error("FAQ Service Error:", error);
        return null;
    }
};

module.exports = { getFaqResponse };
