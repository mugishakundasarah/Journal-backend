const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    taskName: String,
    taskDescription: String,
    DateOfAction: Date,
    reminderTime: Date
})

const Task = mongoose.model("Task", TaskSchema);

module.exports.Task = Task 