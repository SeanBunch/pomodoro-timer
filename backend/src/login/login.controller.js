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

async function auth(req, res, next) {
  passport.authenticate("google", { scope: ["email", "profile"] });
  // res.json({data: "you have reach /login/auth/google"})
}


async function protected(req, res, next) {
  res.send("hello! you are protected");
}

async function authFail(req, res) {
  res.send("something went wrong...");
}

module.exports = {
  authMessage: authMessage,
  auth: auth,
  authFail: authFail,
  protected: protected,
  // callback: callback,
};
