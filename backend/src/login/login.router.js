const router = require("express").Router();
const controller = require("./login.controller");

router
 .route("/")
 .get(controller.list)

 module.exports = router;