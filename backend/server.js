const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// ✅ Middleware actualizado
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // ← ✅ Añade esta línea para aceptar JSON o datos del formulario

// View engine config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const informationRoutes = require("./routes/information.js");
app.use("/information", informationRoutes); // ⬅️ Aquí va la ruta dinámica

// Otras páginas
app.get("/", (req, res) => {
  res.render("home", { title: "Home - Solent Art" });
});

app.get("/courses", (req, res) => {
  res.render("courses", { title: "Courses - Solent Art" });
});

app.get("/instructors", (req, res) => {
  res.render("instructors", { title: "Instructors - Solent Art" });
});

app.get("/artrate", (req, res) => {
  res.render("artrate", { title: "Art Rate - Solent Art" });
});

app.get("/faq", (req, res) => {
  res.render("faq", { title: "FAQ - Solent Art" });
});

app.get("/events", (req, res) => {
  res.render("events", { title: "Events - Solent Art" });
});

// 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
