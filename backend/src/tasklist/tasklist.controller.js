const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./tasklist.service");

async function list(req, res, next) {
    res.json({ data: "you have reached the task list" })
}

async function create(req, res, next) {
    res.status(201).json({ data: "you made new task" })
}

module.exports = {
    list: [asyncErrorBoundary(list)],
    create: create,
}
