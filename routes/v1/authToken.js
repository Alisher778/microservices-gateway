const express = require("express");
const router = express.Router();
// const documentsController = require("../../controllers/authToken");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET request to /authToken"
  });
});

module.exports = router;
