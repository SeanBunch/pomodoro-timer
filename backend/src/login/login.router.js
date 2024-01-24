const router = require("express").Router();
const controller = require("./login.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
 .route("/")
 .get(controller.authMessage)
 .all(methodNotAllowed)

router
  .route("/auth/google") 
  .get(controller.auth)
  .all(methodNotAllowed)

// router
// .route("google/callback")
// .get(controller.callback)
// .all(methodNotAllowed)

router
.route("/protected")
.get(controller.protected)
.all(methodNotAllowed)

router
.route("/failure")
.get(controller.authFail)
.all(methodNotAllowed)


module.exports = router;