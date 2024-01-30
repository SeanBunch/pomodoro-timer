const service = require("./login.service");
// const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const passport = require("passport");
require("./auth");

async function authMessage(req, res, next) {
  res.json({ data: "you have reached login" });
}

// async function callback() {
//   passport.authenticate("google", {
//     successRedirect: "/protected",
//     failureRedirect: "/auth/failure",
//   })
// }
const auth = passport.authenticate("google", { scope: ["openid", "email", "profile"] });

function isLoggedIn(req, res, next) {
  if(req.user) {
    return next()
  }
  next(res.sendStatus(401))
  
}

async function protected(req, res, next) {
  console.log(req.user)
  res.send(`hello! you are protected ${req.user.displayName}`);
}

async function authFail(req, res) {
  res.send("something went wrong...");
}

module.exports = {
  authMessage: [authMessage],
  auth: [auth],
  authFail: [authFail],
  protected: [isLoggedIn, protected],
  // callback: [callback],
};
