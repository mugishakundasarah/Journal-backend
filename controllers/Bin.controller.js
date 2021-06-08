const { binItem } = require("../models/Bin.model")
const { formatResult } = require("../utils/import")
exports.gettingbinItems = async(req, res) => {
    try {
        let {
            page,
            limit
        } = req.query
        if (!page)
            page = 1
        if (!limit)
            limit = 10
        if (page < 1)
            return res.send(formatResult({
                status: 400,
                message: "page query should greater than 0"
            }))
        const options = {
            page: page,
            limit: limit
        }
        const binItems = await binItem.paginate({}, options)
        res.send(formatResult({
            data: binItems
        }))

    } catch (error) {
        res.send(formatResult({
            status: 500,
            message: error
        }))
    }
}

exports.createbinItem = async(req, res) => {
    try {
        const newbinItem = new binItem(req.body)
        await newbinItem.save()
        return res.send(
            formatResult({
                status: 200,
                message: "Item added to recycle bin",
                data: newbinItem
            })
        )

    } catch (error) {
        res.send(formatResult({
            status: 500,
            message: error
        }))
    }
}
exports.deletebinItem = async(req, res) => {
    try {
        if (!isValidObjectId(req.params.id))
            return res.send(formatResult({ status: 400, message: "Invalid id" }))
        const binItem = await binItem.findOneAndDelete({
            _id: req.params.id
        })
        return res.send(formatResult({ status: 200, message: 'Item deleted Permanently', data: binItem }))
    } catch (e) {
        return res.send(formatResult({ status: 500, message: e }))
    }
}