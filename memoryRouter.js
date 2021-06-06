const express = require("express");
const router = express.Router();
const { createMemory,getMemories } = require("./controllers/memoryController")
router.route("/:id")
.post(createMemory)
.get(getMemories)
module.exports = router;