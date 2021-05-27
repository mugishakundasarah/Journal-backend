const mongoose = require("mongoose")
const Client = require("./client.model")
const EventSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Types.ObjectId,
        ref: Client
    },
    EventName: String,
    EventTime: Date 
})

const Event = mongoose.model("Event", EventSchema);

module.exports = Event 