const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.get("/", (req, res) => {
  db.all("SELECT * FROM courses", [], (err, rows) => {
    if (err) {
      return res.status(500).send("Database error");
    }
    res.render("courses", { courses: rows });
  });
});

module.exports = router;
