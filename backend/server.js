const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir archivos estáticos como CSS, JS, imágenes, etc.
app.use(express.static(path.join(__dirname, "public")));

// Rutas de páginas (views)
const pagesRoutes = require("./routes/pages");
app.use("/", pagesRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
