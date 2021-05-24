const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Types.ObjectId(),
        ref: Client
    },
    taskName: String,
    taskDescription: String,
    DateOfAction: Date,
    reminderTime: Date
})

const Task = mongoose.model("Task", TaskSchema);

module.exports.Task = Task 