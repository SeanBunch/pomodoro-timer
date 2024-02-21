const express = require("express");
const app = express();
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const passport = require("passport");
require('dotenv').config();
const SESSION_SECRET = process.env.SESSION_SECRET;

const taskListRouter = require("./tasklist/tasklist.router");
const loginRouter = require("./login/login.router");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("./db/connection");
const loginController = require("./login/login.controller");
const store = new KnexSessionStore({
  knex,
  tablename: "sessions",
});
require("./login/auth")

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1800000,
    },
    store,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/tasklist", taskListRouter);
app.use("/login", loginRouter);

app.use("/", (req, res, next) => {
  const n = req.session.views || 1;
  req.session.views = n + 1;
  res.json({ data: `pomotime server online with ${n} views` });
  res.end(`${n} views`);
});

// not found handler
app.use(notFound);

// error handler
app.use(errorHandler);

module.exports = app;
