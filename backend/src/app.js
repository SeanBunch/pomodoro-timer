const express = require("express");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const taskListRouter = require("./tasklist/tasklist.router");
const loginRouter = require("./login/login.router");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasklist", taskListRouter);
app.use("/login", loginRouter);

app.use("/", (req, res, next) => {
  res.json({ data: "pomotime server online" });
});

// not found handler
app.use(notFound);

// error handler
app.use(errorHandler);

module.exports = app;
