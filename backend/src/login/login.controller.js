const service = require("./login.service");
// const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const passport = require("passport");
require("./auth");

async function authMessage(req, res, next) {
  res.json({ data: "you have reached login" });
}

const auth = passport.authenticate("google", { scope: ["openid", "email", "profile"] });
const authCallback = passport.authenticate("google", {
  successRedirect: "http://localhost:3000",
  failureRedirect: "/login/failure",
});

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
  authCallback: [authCallback],
};
