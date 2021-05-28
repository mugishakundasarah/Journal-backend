const mongoose = require("mongoose")
const paginate = require('mongoose-paginate-v2');
const BinSchema = new mongoose.Schema({
    // clientID: {
    //     type: mongoose.Types.ObjectId(),
    //     ref: Client
    // },
    // ItemRef: {
    //     type: mongoose.Types.ObjectId()
    // }
    //dummy data for testing purpose
    clientID:{
        type:String,
        min:10,
        required:true
    },
    ItemRef:{
        type:String,
        required:true
    }
})
BinSchema.plugin(paginate)
const binItem = mongoose.model("binItem", BinSchema);

module.exports.binItem = binItem 
