const express = require("express");
const router = express.Router();
const { createMood, getWeekMoods, deletePreviousMoods, weeklyStatistics } = require("./controllers/moodController");

router.route('/:id/statistics')
    .get(weeklyStatistics);
router.route('/:id')
    .get(getWeekMoods)
    .post(createMood)
    .delete(deletePreviousMoods);

module.exports = router;