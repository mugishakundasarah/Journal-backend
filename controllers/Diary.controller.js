const _ = require("lodash")
const { Diary, validateDiary } = require("../models/Diary.models")
const { formatResult } = require("../utils/import")

module.exports.createDiary = async(req, res) => {
    try {
        const diary = _.pick(req.body, ['DiaryTitle', 'DiaryContent'])
        const { error, value } = validateDiary.validate(diary)
        if (error) {
            return res.send(formatResult({ status: 400, message: error }))
        }
        const userId = req.user.id;
        const newDiary = new Diary({ DiaryWriter: userId, value })
        const result = await newDiary.save();
        if (result) {
            return res.send(formatResult({ status: 201, message: "saved diary" }))
        }
    } catch (error) {
        return res.send(formatResult({ status: 500, message: error }))
    }
}

module.exports.getDiaries = async(req, res) => {
    try {
        const user = req.user.id
        const result = await Diary.find({ $where: { DiaryWriter: user } })
        return res.send(result)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.deleteDiary = async(req, res) => {
    try {
        const result = await Diary.findByIdAndDelete(req.params.id)
        return res.send(formatResult({ status: 204, message: "deleted the diary" }))
    } catch (error) {
        return res.send(formatResult({ status: 500, message: error }))
    }
}