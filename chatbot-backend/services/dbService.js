const mongoose = require("mongoose");
const Attendance = require("../models/Attendance");
const Result = require("../models/Result");
const User = require("../models/User");

const getPersonalizedData = async (userId, intent) => {
    try {
        if (!userId) return null;
        const userObjectId = new mongoose.Types.ObjectId(userId);

        switch (intent) {
            case "attendance":
                const attendance = await Attendance.find({ student: userObjectId }).sort({ date: -1 }).limit(5);
                if (attendance.length === 0) return "I couldn't find any attendance records for you in our system yet.";
                const attendanceSummary = attendance.map(a => `• ${a.subject}: ${a.status.toUpperCase()} (${new Date(a.date).toLocaleDateString()})`).join("\n");
                return `Here is your recent attendance history:\n${attendanceSummary}`;

            case "marks":
            case "result":
                const results = await Result.find({ student: userObjectId }).sort({ createdAt: -1 }).limit(5);
                if (results.length === 0) return "I couldn't find any exam marks or results for you yet.";
                const resultSummary = results.map(r => `• ${r.subject} (${r.examType}): ${r.marks}/${r.totalMarks} - Grade: ${r.grade}`).join("\n");
                return `Here are your recent examination scores:\n${resultSummary}`;

            case "profile":
                const user = await User.findById(userObjectId);
                if (!user) return "I couldn't find your detailed profile information.";
                return `User Profile Summary:\n• Name: ${user.name}\n• Role: ${user.role}\n• Dept: ${user.department || "System General"}\n• Sem: ${user.semester || "N/A"}`;

            default:
                return null;
        }
    } catch (error) {
        console.error("DB Service Error:", error);
        return "I encountered a minor error while pulling your records. Please try again in secondary.";
    }
};

module.exports = { getPersonalizedData };
