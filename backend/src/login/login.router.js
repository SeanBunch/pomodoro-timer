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

router
  .route("/google/callback") 
  .get(controller.authCallback)
  .all(methodNotAllowed)

router
.route("/isAuth")
.get(controller.isAuth)

router
.route("/logout")
.get(controller.logout)
.all(methodNotAllowed)





module.exports = router;