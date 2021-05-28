const mongoose = require("mongoose")
const joi = require("joi");

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
module.exports.validateNote = (note)=>{
    const validNote = joi.object({
        noteTitle:joi.string(),
        DateOfAction:joi.date(),
        reminderTime:joi.date()
    })
    return validNote(note);
}