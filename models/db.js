const mongoose = require("mongoose")
const debug = require("debug")("app:database")

const connect = async() => {
    try {
        await mongoose.connect("mongodb://localhost/journal", {useNewUrlParser: true, useUnifiedTopology: true});    
        debug("successfully connected");
    } catch (error) {
        debug(error)
    }
}
// async function connect(){
//     mongoose.connect("mongodb://localhost/journal",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true 
//     })
//     .then(()=>{
//         console.log("connected")
//     }).catch(err=>{
//         console.log(err);
//     })
// }

connect();