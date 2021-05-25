const mongoose = require("mongoose")

const DiarySchema = new mongoose.Schema({
    DiaryWriter: {
        type: mongoose.Types.ObjectId(),
        ref: Client
    },
    DiaryDateOFWriting: Date,
    DiaryTitle: String,
    DiaryContent: String
})

const Diary = mongoose.model("Diary", DiarySchema);

module.exports.Diary = Diary 

