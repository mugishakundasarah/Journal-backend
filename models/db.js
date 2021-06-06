const mongoose = require("mongoose")
const debug = require("debug")("app:database")
const config = require("config")
const connect = async() => {
    try {
        const mongoUrl = config.get("app.mongoUrl")
        await mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});    
        debug("successfully connected", mongoUrl);
    } catch (error) {
        debug(`FAILED TO CONNECT MONGODB.....`+ error)
    }
}
connect();