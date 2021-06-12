const { isValidObjectId } = require("mongoose");
const { Goal, validate_Goal } = require("../models/Goal.model");
const { formatResult } = require("../utils/import");

/**
 * Get Goal
 * @param {*} req 
 * @param {*} res 
 */
exports.getGoal = async(req, res) => {
        try {
            const result = await Goal.find()
            return res.send(result)
        } catch (error) {
            return res.send(error)
                // }
                // try {
                //     let { limit, page } = req.query;

            //     if (!page)
            //         page = 1

            //     if (!limit)
            //         limit = 20

            //     if (page < 1)
            //         return res.send(formatResult({ status: 400, message: 'Page query must be greater than 0' }))

            //     if (limit < 1)
            //         return res.send(formatResult({ status: 400, message: 'Limit query must be greater than 0' }))

            //     const options = {
            //         page: page,
            //         limit: limit
            //     };

            //     const message = await Goal.paginate({}, options)
            //     res.send(formatResult({ data: message }))
            // } catch (e) {
            //     return res.send(formatResult({ status: 500, message: e }))
        }
    }
    /**
     * Create Goal
     * @param {*} req 
     * @param {*} res 
     */
exports.createGoal = async(req, res) => {
    try {
        // userId = req.user.userId;
        const { error } = validate_Goal(req.body)
        if (error)
            return res.send(formatResult({ status: 400, message: error.details[0].message }))
                // const {} = req.body
        const newGoal = new Goal(req.body)
        await newGoal.save();
        return res.send(formatResult({ status: 201, message: 'Goal created successfully', data: newGoal }))
    } catch (e) {
        return res.send(formatResult({ status: 500, message: e }))
    }
}

/**
 * update Goal
 * @param {*} req 
 * @param {*} res 
 */
exports.updateGoal = async(req, res) => {
    try {
        // checking id
        if (!isValidObjectId(req.params.id))
            return res.send(formatResult({ status: 400, message: "Invalid id" }));

        const { error } = validate_Goal(req.body)
        if (error)
            return res.send(formatResult({ status: 400, message: error.details[0].message }))


        // update Goal
        const updateGoal = await Goal.findOneAndUpdate({ _id: req.params.id }, req.body)
        return res.send(formatResult({ status: 200, message: 'Goal updated successfully', data: updateGoal }))
    } catch (e) {
        return res.send(formatResult({ status: 500, message: e }))
    }
}

/**
 * Delete Goal
 * @param {*} req 
 * @param {*} res 
 */
exports.deleteGoal = async(req, res) => {
    try {
        if (!isValidObjectId(req.params.id))
            return res.send(formatResult({ status: 400, message: "Invalid id" }))
        const GoalID = await Goal.findOneAndDelete({
            _id: req.params.id
        })
        if (!GoalID)
            return res.send(formatResult({ status: 404, message: "Goal not found" }))
        return res.send(formatResult({ status: 200, message: 'Goal deleted successfully' }))
    } catch (e) {
        return res.send(formatResult({ status: 500, message: e }))
    }
}