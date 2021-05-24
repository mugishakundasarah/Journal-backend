const mongoose = require("mongoose")

const DiarySchema = new mongoose.Schema({
    
})

const Diary = mongoose.model("Diary", DiarySchema);

module.exports.Diary = Diary 