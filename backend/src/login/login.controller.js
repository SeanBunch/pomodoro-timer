// const service = require("./login.service")
// const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    res.json({ data: "you have reached login list" })

}


module.exports = {
    list: list,
}