import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db;
const dbPath = path.join(__dirname, "../DATABASE/webdatabase.db");

(async () => {
  db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
})();

// GET /information → renderizar con mensaje opcional
router.get("/", (req, res) => {
  res.render("information", {
    title: "Information - Solent Art",
    success: null,
  });
});

// POST /information → recibir y guardar los datos
router.post("/", async (req, res) => {
  const { firstname, lastname, email } = req.body;
  const fullName = `${firstname} ${lastname}`;
  const message = "No message provided";

  try {
    await db.run(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [fullName, email, message]
    );
    res.render("information", {
      title: "Information - Solent Art",
      success: true,
    });
  } catch (err) {
    console.error("Error inserting message:", err);
    res.render("information", {
      title: "Information - Solent Art",
      success: false,
    });
  }
});

export default router;
