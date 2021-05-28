var Router       = require('router')
const { createbinItem, gettingbinItems, deletebinItem } = require('../controllers/Bin.controller');
const router=Router()

router.route('/')
.post(createbinItem)
.get(gettingbinItems)
router.route('/:id')
.delete(deletebinItem)

module.exports.binItemsRoutes=router