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

exports.validate_Goal = (goal) => {
    const goal_validation = Joi.object().keys({
        DiaryTitle: Joi.string().required(),
        GoalName: Joi.string().required(),
        DateOfAction: Joi.Date().required(),
        reminderTime: Joi.Date().required(),
        GoalCategory: Joi.string().required()
    })
    return goal_validation.validate(goal)
}
module.exports.Goal = Goal