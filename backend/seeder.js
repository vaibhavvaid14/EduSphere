/**
 * ===== EduSphere Database Seeder =====
 * Run: node seeder.js
 * 
 * Seeds the database with sample data for testing:
 * - 1 Admin user
 * - 2 Faculty users
 * - 3 Student users
 * - Attendance, Results, Grievances, Notifications
 * 
 * Default password for all users: password123
 */

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");
const Attendance = require("./models/Attendance");
const Result = require("./models/Result");
const Grievance = require("./models/Grievance");
const Notification = require("./models/Notification");

dotenv.config();

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");

        // Clear existing data
        await User.deleteMany();
        await Attendance.deleteMany();
        await Result.deleteMany();
        await Grievance.deleteMany();
        await Notification.deleteMany();
        console.log("🗑️  Cleared existing data");

        // ==================== USERS ====================
        const admin = await User.create({
            name: "Dr. Admin",
            email: "admin@edu.com",
            password: "password123",
            role: "admin",
            department: "Administration",
            phone: "+91 9000000001",
        });

        const faculty1 = await User.create({
            name: "Dr. Smith",
            email: "faculty@edu.com",
            password: "password123",
            role: "faculty",
            department: "Computer Science",
            phone: "+91 9000000002",
        });

        const faculty2 = await User.create({
            name: "Prof. Johnson",
            email: "faculty2@edu.com",
            password: "password123",
            role: "faculty",
            department: "Physics",
            phone: "+91 9000000003",
        });

        const student1 = await User.create({
            name: "Adeel Khan",
            email: "student@edu.com",
            password: "password123",
            role: "student",
            department: "Computer Science",
            semester: 6,
            enrollmentNo: "CS2023101",
            phone: "+91 9876543210",
        });

        const student2 = await User.create({
            name: "Sara Ali",
            email: "student2@edu.com",
            password: "password123",
            role: "student",
            department: "Computer Science",
            semester: 6,
            enrollmentNo: "CS2023102",
            phone: "+91 9876543211",
        });

        const student3 = await User.create({
            name: "Imran Ahmed",
            email: "student3@edu.com",
            password: "password123",
            role: "student",
            department: "Physics",
            semester: 4,
            enrollmentNo: "PH2024201",
            phone: "+91 9876543212",
        });

        console.log("👤 Users seeded");

        // ==================== ATTENDANCE ====================
        const subjects = ["Mathematics", "Physics", "Computer Science", "English"];
        const students = [student1, student2, student3];

        const attendanceRecords = [];
        for (const student of students) {
            for (const subject of subjects) {
                // Generate 40 days of attendance per subject
                for (let i = 0; i < 40; i++) {
                    const date = new Date(2026, 0, 6 + i); // Starting Jan 6, 2026
                    // Skip weekends
                    if (date.getDay() === 0 || date.getDay() === 6) continue;

                    attendanceRecords.push({
                        student: student._id,
                        subject,
                        date,
                        status: Math.random() > 0.15 ? "present" : "absent", // ~85% attendance
                        markedBy: subject === "Physics" ? faculty2._id : faculty1._id,
                    });
                }
            }
        }
        await Attendance.insertMany(attendanceRecords);
        console.log(`📋 Attendance seeded: ${attendanceRecords.length} records`);

        // ==================== RESULTS ====================
        const resultsData = [];
        for (const student of students) {
            for (const subject of subjects) {
                // Internal marks
                resultsData.push({
                    student: student._id,
                    subject,
                    examType: "internal",
                    marks: Math.floor(Math.random() * 25) + 65, // 65-90
                    totalMarks: 100,
                    grade: "",
                    semester: student.semester,
                    uploadedBy: faculty1._id,
                });

                // Midterm marks
                resultsData.push({
                    student: student._id,
                    subject,
                    examType: "midterm",
                    marks: Math.floor(Math.random() * 30) + 60, // 60-90
                    totalMarks: 100,
                    grade: "",
                    semester: student.semester,
                    uploadedBy: faculty1._id,
                });
            }
        }

        // Assign grades based on marks
        resultsData.forEach((r) => {
            if (r.marks >= 90) r.grade = "A+";
            else if (r.marks >= 80) r.grade = "A";
            else if (r.marks >= 70) r.grade = "B+";
            else if (r.marks >= 60) r.grade = "B";
            else if (r.marks >= 50) r.grade = "C";
            else r.grade = "F";
        });

        await Result.insertMany(resultsData);
        console.log(`📝 Results seeded: ${resultsData.length} records`);

        // ==================== GRIEVANCES ====================
        await Grievance.create([
            {
                student: student1._id,
                subject: "Marks not updated",
                description:
                    "My internal assessment marks for Computer Science have not been updated on the portal. I submitted the assignment on time.",
                status: "pending",
            },
            {
                student: student1._id,
                subject: "Attendance discrepancy",
                description:
                    "I was present in the Mathematics class on 15th Feb but my attendance shows absent. Please correct this.",
                status: "resolved",
                response: "Attendance has been corrected. Thank you for reporting.",
                respondedBy: faculty1._id,
                respondedAt: new Date(),
            },
            {
                student: student2._id,
                subject: "Library access issue",
                description:
                    "I am unable to access the digital library section. My student ID is not being recognized.",
                status: "in-progress",
            },
        ]);
        console.log("📩 Grievances seeded");

        // ==================== NOTIFICATIONS ====================
        await Notification.create([
            {
                title: "Mid Semester Exams",
                message:
                    "Mid semester examinations will begin from 20th March 2026. Schedule will be uploaded soon.",
                type: "exam",
                targetRole: "all",
                createdBy: admin._id,
            },
            {
                title: "Assignment Deadline Extended",
                message:
                    "The submission deadline for CS301 assignment has been extended to 25th March 2026.",
                type: "deadline",
                targetRole: "student",
                createdBy: faculty1._id,
            },
            {
                title: "Holi Holiday",
                message:
                    "The university will remain closed on 14th March 2026 on account of Holi. Happy Holi! 🎨",
                type: "holiday",
                targetRole: "all",
                createdBy: admin._id,
            },
            {
                title: "Scholarship Applications Open",
                message:
                    "Merit-based scholarship applications are now open. Last date to apply: 10th April 2026.",
                type: "announcement",
                targetRole: "student",
                createdBy: admin._id,
            },
            {
                title: "Faculty Meeting",
                message:
                    "All faculty members are requested to attend the departmental meeting on 5th March at 10 AM.",
                type: "general",
                targetRole: "faculty",
                createdBy: admin._id,
            },
        ]);
        console.log("🔔 Notifications seeded");

        // ==================== SUMMARY ====================
        console.log("\n===== SEED SUMMARY =====");
        console.log(`Users: ${await User.countDocuments()}`);
        console.log(`Attendance: ${await Attendance.countDocuments()}`);
        console.log(`Results: ${await Result.countDocuments()}`);
        console.log(`Grievances: ${await Grievance.countDocuments()}`);
        console.log(`Notifications: ${await Notification.countDocuments()}`);
        console.log("\n===== LOGIN CREDENTIALS =====");
        console.log("Admin:   admin@edu.com    / password123");
        console.log("Faculty: faculty@edu.com  / password123");
        console.log("Student: student@edu.com  / password123");
        console.log("========================\n");

        process.exit(0);
    } catch (error) {
        console.error("❌ Seeder error:", error.message);
        process.exit(1);
    }
};

seedDatabase();
