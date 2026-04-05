const User = require("../models/User");
const Course = require("../models/Course");
const Notice = require("../models/Notice");
const Exam = require("../models/Exam");

const getUniversityContext = async () => {
    try {
        const [studentCount, facultyCount, courseCount, recentNotices, upcomingExams] = await Promise.all([
            User.countDocuments({ role: "student" }),
            User.countDocuments({ role: "faculty" }),
            Course.countDocuments(),
            Notice.find().sort({ date: -1 }).limit(3),
            Exam.find({ date: { $gte: new Date() } }).sort({ date: 1 }).limit(3)
        ]);

        const context = `
Live EduSphere Dashboard Data:
- Total Enrolled Students: ${studentCount}
- Active Faculty Members: ${facultyCount}
- Available Courses: ${courseCount}
- Recent Notices: ${recentNotices.length > 0 ? recentNotices.map(n => n.title).join(", ") : "No recent notices"}
- Upcoming Exams: ${upcomingExams.length > 0 ? upcomingExams.map(e => `${e.subject} on ${e.date.toLocaleDateString()}`).join(", ") : "No upcoming exams"}
        `.trim();

        return context;
    } catch (error) {
        console.error("Error fetching university context:", error);
        return "Note: Real-time university data is currently unavailable.";
    }
};

module.exports = { getUniversityContext };
