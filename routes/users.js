var express = require("express");
var router = express.Router();
var User = require("../schemas/users");
var axios = require("axios");

router.get("/restday", (req, res) => {
  const solYear = req.body.year;
  const solMonth = req.body.month;
  axios
    .get(
      "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?_type=json&ServiceKey=%2FPMziA0mSdPA44MMw9NPzpUjPOhJqbOUncZDFQek74ymt2sCyM8BKFyS%2BfRCYB70E1ZbSj0m3v3huCKjWVKrwg%3D%3D",
      {
        params: {
          solYear: solYear,
          solMonth: solMonth < 10 ? "0" + solMonth : solMonth,
        },
      }
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/", (req, res) => {
  User.find({})
    .then((result) => {
      res.json({ contents: result, count: result.length });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/", (req, res) => {
  User.insertMany({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
    .then((result) => {
      res.json({ result: { code: "Y", message: "Success" } });
    })
    .catch((err) => {
      console.error(err.message);
      res.json({ result: { code: "N", message: err.message } });
    });
});

router.put("/", (req, res) => {
  let target = { name: req.body.name };
  let newValue = {
    $set: { age: req.body.age, married: req.body.married },
  };
  User.updateOne(target, newValue)
    .then((result) => {
      if (result.nModified === 0)
        throw { result: { code: "N", message: "Fail" } };
      res.json({
        result: {
          code: "Y",
          message: "Success",
        },
      });
    })
    .catch((err) => {
      console.error(err.message);
      res.json(err);
    });
});

router.delete("/", (req, res) => {
  console.log(req.body.name);

  User.deleteOne({ name: req.body.name })
    .then((result) => {
      if (result.deletedCount === 0)
        throw { result: { code: "N", message: "Fail" } };
      res.json({
        result: {
          code: "Y",
          message: "Success",
        },
      });
    })
    .catch((err) => {
      console.error(err.message);
      res.json(err);
    });
});

module.exports = router;
