require("dotenv").config();
const debug = require("debug")("items:root");
const chalk = require("chalk");
const express = require("express");

const app = express();
const connectDB = require("./database");
const startServer = require("./server");

const port = process.env.SERVER_PORT || 3000;
const mongoConnection = process.env.MONGODB_STRING;

(async () => {
  try {
    await startServer(port);
    await connectDB(mongoConnection);
  } catch (error) {
    debug(chalk.red(`Error: `, error.message));
  }
})();

app.use(express.json());
