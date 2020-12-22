var express = require("express");
const { MongooseDocument } = require("mongoose");
var router = express.Router();
var File = require("../schemas/files");
var fs = require("fs");

var Img = require("../schemas/files");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.get("/", (req, res) => {
  Img.find({})
    .then((result) => {
      res.json({ contents: result, count: result.length });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/img/:name", (req, res) => {
  console.log(req.params.name);
  let imgUrl = "uploads/" + req.params.name;
  console.log(imgUrl);
  fs.readFile(imgUrl, function (err, data) {
    res.end(data);
  });
  // fs.readFile(imgUrl, function (err) {
  //   if (err) return console.log(err);
  // });
});

router.post("/", upload.single("img"), (req, res) => {
  let imgUrl = process.env.SERVER + "/api/files/img/" + req.file.filename;
  console.log(imgUrl);
  Img.insertMany({ name: req.file.filename, url: imgUrl })
    .then((result) => {
      res.json({
        code: "Y",
        message: "Success",
        fileName: req.file.filename,
      });
    })
    .catch((err) => {
      console.error(err.message);
      res.json({ code: "N", message: err.message });
    });
});

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

router.delete("/", (req, res, next) => {
  var imgUrl = "uploads/" + req.body.name;

  Img.deleteOne({ name: req.body.name })
    .then((result) => {
      if (result.deletedCount === 0)
        throw { result: { code: "N", message: "Fail" } };
      res.json({
        result: {
          code: "Y",
          message: "Success",
        },
      });
      fs.unlink(imgUrl, function (err) {
        if (err) return console.log(err);
      });
    })
    .catch((err) => {
      console.error(err.message);
      res.json(err);
    });
});

module.exports = router;
