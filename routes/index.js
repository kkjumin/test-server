const express = require("express");
const router = express.Router();

const main = require("./main.js");
const users = require("./users.js");
const members = require("./members.js");

router.use("/", main);
router.use("/users", users);
router.use("/members", members);

module.exports = router;
