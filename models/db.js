const mongoose = require("mongoose")
const debug = require("debug")("app:database")

const connect = async() => {
    try {
        await mongoose.connect("mongodb+srv://sarah:28!01!2020@cluster0.jldhx.mongodb.net/journal?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});    
        debug("successfully connected");
    } catch (error) {
        debug(error)
    }
}
connect();