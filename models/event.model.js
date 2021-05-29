const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Client
    },
    EventName: String,
    EventTime: Date 
})

const Event = mongoose.model("Event", EventSchema);

module.exports.Event = Event 