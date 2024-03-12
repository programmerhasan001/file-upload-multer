const express = require("express")
const routes = require("./src/routes/api")

const app = express()

// routes
app.use("/", routes)

module.exports = app;