const Timetable = require("../models/Timetable");
const Course = require("../models/Course");

const Attendance = require("../models/Attendance");

// @desc    Get timetable entries for a specific department and semester
// @route   GET /api/timetable
// @access  Private
const getTimetable = async (req, res) => {
    try {
        const { department, semester } = req.query;
        let query = {};
        if (department) query.department = department;
        if (semester) query.semester = semester;

        const entries = await Timetable.find(query)
            .populate({
                path: "course",
                populate: { path: "faculty", select: "name email" }
            })
            .sort({ day: 1, startTime: 1 });

        // If faculty, check for today's attendance status
        if (req.user && req.user.role === "faculty") {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            // Get all attendance subjects marked today by this faculty
            const markedSubjects = await Attendance.distinct("subject", {
                markedBy: req.user._id,
                date: { $gte: today, $lt: tomorrow }
            });

            const updatedEntries = entries.map(entry => {
                const entryPlain = entry.toObject();
                entryPlain.isMarked = markedSubjects.includes(entryPlain.course?.title);
                return entryPlain;
            });

            return res.status(200).json(updatedEntries);
        }

        res.status(200).json(entries);
    } catch (error) {
        console.error("Get Timetable Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// @desc    Add a timetable entry
// @route   POST /api/timetable
// @access  Private (Admin)
const addTimetableEntry = async (req, res) => {
    try {
        const { course, department, semester, day, startTime, endTime, roomContext } = req.body;

        if (!course || !department || !semester || !day || !startTime || !endTime) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const courseDoc = await Course.findById(course);
        if (!courseDoc) {
            return res.status(404).json({ message: "Course not found" });
        }

        const entry = await Timetable.create({
            course,
            department,
            semester,
            day,
            startTime,
            endTime,
            roomContext,
        });

        res.status(201).json(entry);
    } catch (error) {
        console.error("Add Timetable Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// @desc    Update a timetable entry
// @route   PUT /api/timetable/:id
// @access  Private (Admin)
const updateTimetableEntry = async (req, res) => {
    try {
        const entry = await Timetable.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!entry) return res.status(404).json({ message: "Timetable entry not found" });

        res.status(200).json(entry);
    } catch (error) {
        console.error("Update Timetable Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// @desc    Delete a timetable entry
// @route   DELETE /api/timetable/:id
// @access  Private (Admin)
const deleteTimetableEntry = async (req, res) => {
    try {
        const entry = await Timetable.findByIdAndDelete(req.params.id);
        if (!entry) return res.status(404).json({ message: "Timetable entry not found" });

        res.status(200).json({ message: "Entry successfully deleted" });
    } catch (error) {
        console.error("Delete Timetable Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getTimetable,
    addTimetableEntry,
    updateTimetableEntry,
    deleteTimetableEntry,
};
