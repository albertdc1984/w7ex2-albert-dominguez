const express = require("express");
const userLogin = require("../controllers/userLoginController");

const router = express.Router();

router.post("/login", userLogin);

module.exports = router;
