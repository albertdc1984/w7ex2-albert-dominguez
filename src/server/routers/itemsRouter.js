const express = require("express");
const getItems = require("../controllers/itemsController");

const itemsRouter = express.Router();

itemsRouter.get("/list", getItems);

module.exports = itemsRouter;
