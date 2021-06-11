var Router = require('router')
const { createGoal, gettingGoals, deleteGoal } = require('../controllers/Goal.controller');
const router = Router()

router.route('/')
    .post(createGoal)
    .get(gettingGoals)
router.route('/:id')
    .delete(deleteGoal)

module.exports.GoalsRoutes = router