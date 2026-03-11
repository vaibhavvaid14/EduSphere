const Feedback = require("../models/Feedback");
const Course = require("../models/Course");

// @desc    Submit new feedback
// @route   POST /api/feedback/submit
// @access  Private (Student)
const submitFeedback = async (req, res) => {
    try {
        const { course: courseId, rating, comments } = req.body;

        if (!courseId || !rating) {
            return res.status(400).json({ message: "Course and rating are required" });
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Check if feedback already exists for this course by this student
        const existing = await Feedback.findOne({ student: req.user._id, course: courseId });
        if (existing) {
            return res.status(400).json({ message: "You have already submitted feedback for this course" });
        }

        const feedback = await Feedback.create({
            student: req.user._id,
            course: courseId,
            faculty: course.faculty,
            rating,
            comments,
        });

        res.status(201).json(feedback);
    } catch (error) {
        console.error("Submit Feedback Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// @desc    Get all feedback submitted by the logged-in student
// @route   GET /api/feedback/student
// @access  Private (Student)
const getStudentFeedback = async (req, res) => {
    try {
        const feedbackList = await Feedback.find({ student: req.user._id })
            .populate("course", "title courseCode")
            .populate("faculty", "name")
            .sort({ createdAt: -1 });

        res.status(200).json(feedbackList);
    } catch (error) {
        console.error("Get Student Feedback Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// @desc    Get all feedback for a particular course (Admin/Faculty oversight)
// @route   GET /api/feedback/course/:courseId
// @access  Private (Admin/Faculty)
const getCourseFeedback = async (req, res) => {
    try {
        const feedbackList = await Feedback.find({ course: req.params.courseId })
            .populate("student", "name enrollmentNo")
            .sort({ createdAt: -1 });

        res.status(200).json(feedbackList);
    } catch (error) {
        console.error("Get Course Feedback Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// @desc    Get system-wide feedback analytics
// @route   GET /api/feedback/analytics
// @access  Private (Admin/Manager)
const getFeedbackAnalytics = async (req, res) => {
    try {
        // Simple analytics: average rating per course
        const analytics = await Feedback.aggregate([
            {
                $group: {
                    _id: "$course",
                    averageRating: { $avg: "$rating" },
                    totalReviews: { $sum: 1 },
                },
            },
            {
                $lookup: {
                    from: "courses",
                    localField: "_id",
                    foreignField: "_id",
                    as: "courseData",
                },
            },
            {
                $unwind: "$courseData",
            },
            {
                $project: {
                    _id: 1,
                    courseCode: "$courseData.courseCode",
                    courseTitle: "$courseData.title",
                    averageRating: { $round: ["$averageRating", 1] },
                    totalReviews: 1,
                },
            },
            { $sort: { averageRating: -1 } }
        ]);

        res.status(200).json(analytics);
    } catch (error) {
        console.error("Feedback Analytics Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    submitFeedback,
    getStudentFeedback,
    getCourseFeedback,
    getFeedbackAnalytics,
};
