const mongoose = require("mongoose")

const NoteSchema = new mongoose.Schema({
    noteTitle: String,
    noteWriter: {
        type: mongoose.types.objectId(),
        ref: Client
    },
    DateOfAction: Date,
    reminderTime: Date
})

const Note = mongoose.model("Note", NoteSchema);

module.exports.Note = Note 