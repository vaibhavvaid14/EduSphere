const mongoose = require("mongoose");

const grievanceSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        subject: {
            type: String,
            required: [true, "Grievance subject/title is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
        },
        status: {
            type: String,
            enum: ["pending", "in-progress", "resolved", "rejected"],
            default: "pending",
        },
        response: {
            type: String,
            default: "",
        },
        respondedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
        respondedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Grievance", grievanceSchema);
