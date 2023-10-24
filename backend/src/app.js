const express = require("express");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const taskListRouter = require("./tasklist/tasklist.router");
const loginRouter = require("./login/login.router");
const cors = require("cors");

const app = express();
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("./db/connection");
const store = new KnexSessionStore({
  knex,
  tablename: "sessions",
});

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "notell",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000,
    },
  store,
  })
);

app.use("/tasklist", taskListRouter);
app.use("/login", loginRouter);

app.use("/", (req, res, next) => {
  const n = req.session.views || 1;
  req.session.views = n + 1;
  res.json({ data: `pomotime server online with ${n} views` });
  // res.end(`${n} views`);
});

// not found handler
app.use(notFound);

// error handler
app.use(errorHandler);

module.exports = app;
