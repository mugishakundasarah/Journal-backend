const mongoose = require("mongoose")

const MoodSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Types.ObjectId(),
        ref: Client
    },
    DateOfRecording: Date,
    moodDescription: String
})

const Mood = mongoose.model("Mood", MoodSchema);

module.exports.Mood = Mood 