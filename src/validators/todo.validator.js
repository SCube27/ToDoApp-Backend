function createTodoValidator(req, res, next) {
    if(!req.body.todoText) {
        return res.json({ status : 'INVALID REQUEST' });
    }

    // if the text is proper then
    next();
}

module.exports = createTodoValidator;