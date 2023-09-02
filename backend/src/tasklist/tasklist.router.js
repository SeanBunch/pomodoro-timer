const router = require("express").Router();
const controller = require("./tasklist.controller");

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

  module.exports = router;
  