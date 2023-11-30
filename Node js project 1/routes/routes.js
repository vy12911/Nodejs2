const express = require("express");
const controller = require("../controllers/cont");
const app = express.Router();

app.get("/", controller.home);
app.post("/add", controller.add);
app.get("/get", controller.get);
app.post('/decrease/:id',controller.post1)
app.post('/decreaseByTwo/:id', controller.post2)
module.exports = app;


