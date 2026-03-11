const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
const {
    getTimetable,
    addTimetableEntry,
    updateTimetableEntry,
    deleteTimetableEntry,
} = require("../controllers/timetableController");

router.use(protect);

router.route("/")
    .get(getTimetable)
    .post(authorize("admin"), addTimetableEntry);

router.route("/:id")
    .put(authorize("admin"), updateTimetableEntry)
    .delete(authorize("admin"), deleteTimetableEntry);

module.exports = router;
