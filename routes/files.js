var express = require("express");
const { MongooseDocument } = require("mongoose");
var router = express.Router();
var File = require("../schemas/files");

var User = require("../schemas/members");

// router.get("/", (req, res) => {
//   User.find({})
//     .then((result) => {
//       res.json({ contents: result, count: result.length });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

router.post("/", (req, res) => {
  console.log("file = ", req);
});

// router.post("/", cors(), (req, res) => {
//   User.find({})
//     .then((result) => {
//       res.json({ contents: result, count: result.length });
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

// router.put("/", (req, res) => {
//   let target = { name: req.body.name };
//   let newValue = {
//     $set: {
//       name: req.body.name,
//       birth: moment(req.body.birth).format("YYYY.MM.DD"),
//       body: { height: req.body.height, weight: req.body.weight },
//       homeTown: req.body.homeTown,
//       nickName: req.body.nickName,
//     },
//   };
//   User.updateOne(target, newValue)
//     .then((result) => {
//       if (result.nModified === 0)
//         throw { result: { code: "N", message: "Fail" } };
//       res.json({
//         result: {
//           code: "Y",
//           message: "Success",
//         },
//       });
//     })
//     .catch((err) => {
//       console.error(err.message);
//       res.json(err);
//     });
// });

// router.delete("/", (req, res, next) => {
//   User.deleteOne({ name: req.body.name })
//     .then((result) => {
//       if (result.deletedCount === 0)
//         throw { result: { code: "N", message: "Fail" } };
//       res.json({
//         result: {
//           code: "Y",
//           message: "Success",
//         },
//       });
//     })
//     .catch((err) => {
//       console.error(err.message);
//       res.json(err);
//     });
// });

module.exports = router;
