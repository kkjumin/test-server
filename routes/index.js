const express = require("express");
const router = express.Router();

const main = require("./main.js");
const users = require("./users.js");
const members = require("./members.js");
const files = require("./files");

router.use("/", main);
router.use("/api/users", users);
router.use("/api/members", members);
router.use("/api/files", files);

module.exports = router;
