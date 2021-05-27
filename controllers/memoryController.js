const Memory = require("./../models/memory.model");
const mongoose = require("mongoose");
exports.createMemory = async (req,res)=>{
    try{
        req.body.clientID = req.params.id;
        req.body.memoryDate = new Date().toUTCString();
        const createdMemory = {...req.body}
        await Memory.create(req.body);
        res.status(200).json({
            data: {
                createdMemory
            }
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}
exports.getMemories = async (req,res)=>{
    try{
        const clientID = mongoose.Types.ObjectId(req.params.id);
        let query = Memory.find({clientID: clientID}).sort("-memoryDate");
        const memories = await query;
        console.log(memories)
        res.status(200).json({
            data: {
                memories
            }
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}
