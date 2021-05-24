const mongoose = require("mongoose")

const GoalSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Types.ObjectId(),
        ref: Client
    },
    GoalName: String,
    DateOfAction: Date,
    reminderTime: Date,
    GoalCategory: {
        type: String,
        enum: ['personal', 'work/business', 'religious']
    }
})

const Goal = mongoose.model("Goal", GoalSchema);

module.exports.Goal = Goal 