const mongoose = require("mongoose")

const GoalSchema = new mongoose.Schema({
    GoalName: String,
    GoalDescription: String,
    DateOfAction: Date,
    reminderTime: Date
})

const Goal = mongoose.model("Goal", GoalSchema);

module.exports.Goal = Goal 