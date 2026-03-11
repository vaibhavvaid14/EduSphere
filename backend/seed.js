const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/edusphere");

        // Check if admin exists
        const adminExists = await User.findOne({ email: "admin@edusphere.com" });
        if (!adminExists) {
            await User.create({
                name: "System Admin",
                email: "admin@edusphere.com",
                password: "password123", // Will be hashed automatically by pre-save
                role: "admin",
                isActive: true
            });
            console.log("✅ Admin built: admin@edusphere.com / password123");
        }

        const studentExists = await User.findOne({ email: "student@edusphere.com" });
        if (!studentExists) {
            await User.create({
                name: "Demo Student",
                email: "student@edusphere.com",
                password: "password123",
                role: "student",
                department: "Computer Science",
                semester: 6,
                enrollmentNo: "CS2023101",
                isActive: true
            });
            console.log("✅ Student built: student@edusphere.com / password123");
        }

        const facultyExists = await User.findOne({ email: "faculty@edusphere.com" });
        if (!facultyExists) {
            await User.create({
                name: "Dr. Faculty",
                email: "faculty@edusphere.com",
                password: "password123",
                role: "faculty",
                department: "Computer Science",
                isActive: true
            });
            console.log("✅ Faculty built: faculty@edusphere.com / password123");
        }
        
        console.log("🎉 Seed finished!");
        process.exit();
    } catch (error) {
        console.error("❌ Seeding failed:\n", error);
        process.exit(1);
    }
};

seedDatabase();
