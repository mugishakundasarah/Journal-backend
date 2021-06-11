const paginate = require('mongoose-paginate-v2');
const Joi = require("joi");
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
GoalSchema.plugin(paginate)
const Goal = mongoose.model("Goal", GoalSchema);

exports.validate_Goal = (goal) => {
    const goal_validation = Joi.object().keys({
        clientID: Joi.string().required(),
        GoalName: Joi.string().required(),
        DateOfAction: Joi.date().required(),
        reminderTime: Joi.date().required(),
        GoalCategory: Joi.string().required()
    })
    return goal_validation.validate(goal)
}
module.exports.Goal = Goal