const express = require("express");
const router = express.Router();

const main = require("./main.js");
const users = require("./users.js");
const members = require("./members.js");
const files = require("./files");

router.use("/", main);
router.use("/users", users);
router.use("/members", members);
router.use("/files", files);

module.exports = router;
