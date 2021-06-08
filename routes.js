const { createDiary, getDiaries, deleteDiary } = require("./controllers/Diary.controller")
const express = require("express")
const diaryRoutes = express.Router()

diaryRoutes.route('/')
    .post(createDiary)
    .get(getDiaries)

diaryRoutes.route('/:id')
    .delete(deleteDiary)

module.exports.diaryRoutes = diaryRoutes