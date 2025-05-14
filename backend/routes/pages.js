const express = require("express");
const router = express.Router();

// Ruta principal → renderiza home.ejs
router.get("/", (req, res) => {
  res.render("home");
});

module.exports = router;
