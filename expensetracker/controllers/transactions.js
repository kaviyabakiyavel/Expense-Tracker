//methods and getting route set up


// @desc get all transactions
// @route GET /api/v1/transactions
// @access public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}


// @desc Add transactions
// @route POST /api/v1/transactions
// @access public
exports.addTransaction = (req, res, next) => {
    res.send('POST transactions')
}


// @desc Delete transactions
// @route DELETE /api/v1/transactions
// @access public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transactions')
}
