const normalizeText = (text) => {
    return text.toLowerCase().replace(/[^\w\s]/g, "").trim();
};

const getIntent = (message) => {
    const input = normalizeText(message);

    // Classification Logic with flexible variations
    const classifications = {
        attendance: ["attendance", "attendence", "attndnce", "present", "absent", "presence", "my attendance"],
        marks: ["marks", "result", "grade", "score", "performance", "gpa", "how much did i score", "my marks"],
        profile: ["profile", "who am i", "my details", "department", "semester", "personal info", "enrollment", "roll no"],
        faq: ["what is", "how to", "help", "support", "contact", "fees", "timings", "process", "university"]
    };

    // Check for exact keyword inclusion or partial matches
    for (const [intent, keywords] of Object.entries(classifications)) {
        if (keywords.some(keyword => input.includes(keyword) || keyword.split(' ').some(word => input.includes(word) && word.length > 3))) {
            return intent;
        }
    }

    // Fallback regex-style checks for common prefixes
    if (input.includes("attend") || input.includes("present")) return "attendance";
    if (input.includes("mark") || input.includes("result") || input.includes("grade")) return "marks";
    if (input.includes("prof") || input.includes("detail") || input.includes("who am i")) return "profile";

    return "general"; 
};

module.exports = { getIntent };
