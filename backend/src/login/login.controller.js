// const service = require("./login.service");
// const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const passport = require("passport");
require("./auth");

async function authMessage(req, res, next) {
  res.json({ data: "you have reached login" });
}

const auth = passport.authenticate("google", { scope: ["openid", "email", "profile"] });
const authCallback = passport.authenticate("google", {
  successRedirect: "http://localhost:3000/login/active",
  failureRedirect: "http://localhost:3000/login/error",
});


function isAuth(req, res, next) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).send("User not logged in.");
  }
}

function logout(req, res, next) {
  req.sesson.destroy();
  res.send("Thank you!");
}

module.exports = {
  authMessage: [authMessage],
  auth: [auth],
  authCallback: [authCallback],
  isAuth: [isAuth],
  logout: [logout],
};
