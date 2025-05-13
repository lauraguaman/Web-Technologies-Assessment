const express = require("express");
const cors = require("cors");
const path = require("path");

/**
 * Config
 */
const port = 3000;

/**
 * App
 */
const app = express();

// Allow different websites to connect
app.use(
  cors({
    origin: "*",
  })
);

/**
 * Public
 */
app.use(express.static(path.join(__dirname, "public")));

/**
 * Data
 */
const coursesData = [
  {
    name: "Undergraduate",
    description: "Discover our range...",
    url: "/",
  },
  {
    name: " Postgraduate",
    description: "Advance your carrer with...",
    url: "/",
  },
];

/**
 * Routes
 */

app.get("/", (req, res) => res.json({ message: "Hi!" }));

app.get("/courses", (req, res) => res.json(coursesData));

/**
 * Server
 */
app.listen(port, () => console.log("Listening on port:" + port));
