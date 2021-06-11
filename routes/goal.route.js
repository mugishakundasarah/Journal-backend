var Router = require('router')
const { createGoal, getGoal, deleteGoal, updateGoal } = require('../controllers/Goal.controllers');
const router = Router()

router.route('/')
    .post(createGoal)
    .get(getGoal)
router.route('/:id')
    .put(updateGoal)
    .delete(deleteGoal)

module.exports.GoalsRoutes = router