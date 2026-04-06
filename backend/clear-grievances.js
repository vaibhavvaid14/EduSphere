const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load models
const Grievance = require("./models/Grievance");

dotenv.config();

const clearGrievances = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");

        const result = await Grievance.deleteMany({});
        console.log(`🗑️  Successfully deleted ${result.deletedCount} grievance(s).`);

        process.exit(0);
    } catch (error) {
        console.error("❌ Error clearing grievances:", error.message);
        process.exit(1);
    }
};

clearGrievances();
