-- Tabla de cursos
CREATE TABLE IF NOT EXISTS courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  url TEXT
);

-- Tabla de instructores
CREATE TABLE IF NOT EXISTS instructors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  bio TEXT,
  subject TEXT,
  email TEXT
);

-- Tabla de mensajes de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  message TEXT
);

-- Tabla de eventos
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  date TEXT,
  instructor TEXT,
  type TEXT,
  course_category TEXT,
  description TEXT
);
-- Tabla de forms
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  date_submitted DATETIME DEFAULT CURRENT_TIMESTAMP
);

