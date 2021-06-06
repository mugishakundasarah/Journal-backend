const Joi = require("joi");
const mongoose = require("mongoose")

const DiarySchema = new mongoose.Schema({
    DiaryWriter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    },
    DiaryTitle: String,
    DiaryContent: String
}, {timestamps: true})

const Diary = mongoose.model("Diary", DiarySchema);

const validateDiary = Joi.object().keys({
    DiaryTitle : Joi.string().required(),
    DiaryContent: Joi.string().required()
})

module.exports = {
    Diary,
    validateDiary
}

