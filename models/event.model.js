const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    EventName: String,
    EventTime: Date 
})

const Event = mongoose.model("Event", EventSchema);

module.exports.Event = Event 