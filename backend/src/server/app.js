const express = require("express");
const cors = require("cors");

const taskListRouter = require("../tasklist/tasklist.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tasklist", taskListRouter);

app.use("/", (req, res, next) => {
    res.json({ data: "pomotime server online" })
});



// not found handler
app.use((request, response, next) => {
    next(`Not found: ${request.originalUrl}`)
});

// error handler
app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "server app error"} = error; 
    res.status(status).json({ error: message });
})

module.exports = app;