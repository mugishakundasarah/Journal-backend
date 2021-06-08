const mongoose = require("mongoose");
const Event = require("./../models/event.model").Event;

exports.createEvent = async (req,res)=>{
    try{
        const clientID = req.params.id;
        req.body.clientID = mongoose.Types.ObjectId(clientID);
        req.body.EventTime = new Date().toUTCString();
        console.log(req.body);
        const createdEvent = {...req.body};
        await Event.create(createdEvent);
        res.status(200).json({
            data: {
                createdEvent
            }
        })
    }catch(err){
        res.status(400).json({
            message: err.message 
        })
    }
}
exports.getEvents = async (req,res)=>{
    try{
        const clientID = mongoose.Types.ObjectId(req.params.id);
        const events = await Event.find({clientID: clientID});
        res.status(200).json({
            data: {
                events
            }
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

