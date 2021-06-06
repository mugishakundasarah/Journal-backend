const mongoose = require("mongoose");
const joi = require("joi");

const clientSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    hobby: String 
})

const Client = mongoose.model("Client", clientSchema);
module.exports.Client = Client
module.exports.validateClient = (client) =>{
    const validClient = joi.object({
        username:joi.string(),
        email:joi.string(),
        password:joi.string(),
        hobby:joi.string()
    })
    return validClient(client);
}
