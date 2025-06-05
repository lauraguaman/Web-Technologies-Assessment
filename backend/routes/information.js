const express = require("express");
const db = require("../DATABASE/db"); // Asegúrate de que esta ruta esté bien

const router = express.Router();

// GET /information → muestra el formulario
router.get("/", (req, res) => {
  res.render("information");
});

// POST /information → guarda el mensaje de contacto en SQLite
router.post("/", (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  // Validación de campos vacíos
  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).send("All fields are required");
  }

  // Combina el nombre completo
  const fullName = `${firstName} ${lastName}`;

  // Consulta SQL correcta para 4 columnas
  const query = `
    INSERT INTO contact_messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  // Ejecutar inserción en base de datos
  db.run(query, [fullName, email, subject, message], function (err) {
    if (err) {
      console.error("❌ Database error:", err.message);
      return res.status(500).send("Database error");
    }

    console.log("✅ Contact saved with ID:", this.lastID);
    res.status(200).send(); // Para que el JS muestre el mensaje de éxito
  });
});

module.exports = router;
