const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Result = require("./models/Result");
const User = require("./models/User");

dotenv.config();

const check = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        const students = await User.find({ role: "student" });
        
        for (const student of students) {
            const results = await Result.find({ student: student._id });
            if (results.length > 0) {
                console.log(`\nStudent: ${student.name} (${student._id}) - ${student.email}`);
                const subjectSums = {};
                results.forEach(r => {
                    const normalizedSubject = String(r.subject || "").trim().toLowerCase();
                    const key = `${normalizedSubject}-${r.semester}`;
                    if (!subjectSums[key]) subjectSums[key] = 0;
                    subjectSums[key] += Number(r.marks) || 0;
                    console.log(`  - [${r.examType}] "${r.subject}" (Len: ${r.subject.length}, Sem ${r.semester}): ${r.marks}`);
                });

                const subjectKeys = Object.keys(subjectSums);
                const totalGPAs = subjectKeys.reduce((acc, key) => acc + (subjectSums[key] / 10), 0);
                const avgGPA = subjectKeys.length > 0 ? (totalGPAs / subjectKeys.length).toFixed(1) : "0.0";
                
                console.log(`  Calculated GPA: ${avgGPA} (Total GPAs: ${totalGPAs}, Subjects: ${subjectKeys.length})`);
            }
        }

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

check();
