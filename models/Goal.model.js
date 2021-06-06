const mongoose = require("mongoose")

const GoalSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Client
    },
    GoalName: String,
    DateOfAction: Date,
    reminderTime: Date,
    GoalCategory: {
        type: String,
        enum: {
            values: ['Business/work', 'Personal', 'family', 'religious'],
            message: '{VALUE} is not supported'
          }      
    }
})

const Goal = mongoose.model("Goal", GoalSchema);

module.exports.Goal = Goal 