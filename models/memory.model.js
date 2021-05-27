const mongoose = require("mongoose");
const memorySchema = new mongoose.Schema({
    clientID: mongoose.Types.ObjectId,
    memoryDate: {
        type: Date,
        required: true
    },
    message: {
        type: String,
        required: [true, 'a memory message is required!']
    }
})
const Memory = mongoose.model("Memory",memorySchema);
module.exports = Memory;