const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
const {
    submitFeedback,
    getStudentFeedback,
    getCourseFeedback,
    getFeedbackAnalytics,
} = require("../controllers/feedbackController");

// Protect all routes
router.use(protect);

// Student routes
router.post("/submit", authorize("student"), submitFeedback);
router.get("/student", authorize("student"), getStudentFeedback);

// Faculty & Admin routes
router.get("/course/:courseId", authorize("admin", "faculty"), getCourseFeedback);
router.get("/analytics", authorize("admin"), getFeedbackAnalytics);

module.exports = router;
