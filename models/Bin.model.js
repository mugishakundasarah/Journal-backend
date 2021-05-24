const mongoose = require("mongoose")

const BinSchema = new mongoose.Schema({
    clientID: {
        type: mongoose.Types.ObjectId(),
        ref: Client
    },
    ItemRef: {
        type: mongoose.Types.ObjectId()
    }
})

const Bin = mongoose.model("Bin", BinSchema);

module.exports.Bin = Bin 