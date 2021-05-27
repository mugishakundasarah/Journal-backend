const Mood = require("./../models/Mood.model");
const mongoose = require("mongoose")
exports.createMood = async (req,res)=>{
    console.log(req.body)
    try{
        const clientID = req.params.id;
        const recordingDate = new Date().toUTCString();
        const moodDesc = req.body.moodDescription;
        console.log(moodDesc);
        const mood = {
            clientID: clientID,
            DateOfRecording: recordingDate,
            moodDescription: moodDesc
        }
        console.log(Mood);
        console.log(mood);
        await Mood.create(mood);
        res.status(200).json({
            data:{
                mood 
            }
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }    
}

exports.getWeekMoods = async (req,res)=>{
    try{
        const weekMoods = await Mood.find({clientID: req.params.id});
        res.status(200).json({
            moods: {
                weekMoods
            }
        })
    }catch(err){
        res.status(400).json({
            message: err 
        })
    }
}

exports.weeklyStatistics = async (req,res)=>{
    try{ 
        const weekStats = await Mood.aggregate([
            {
                $match: {clientID: mongoose.Types.ObjectId(req.params.id)}
            },
            {
                $group: {
                    _id: "$moodDescription",
                    times: {$sum: 1}
                }
            }
        ])
        res.status(200).json({
            data: {
                weekStats
            }
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

//delete previous week moods 
exports.deletePreviousMoods = async (req,res)=>{
    try{
        await Mood.deleteMany({clientID: req.params.id});
        res.status(201).json({
            message: "deleted successfully"
        })
    }catch(err){ 
        res.status(400).json({
            message: err 
        })
    }
}