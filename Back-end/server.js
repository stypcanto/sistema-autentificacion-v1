require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// Configurar conexión con PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Registro de usuario
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", 
    [name, email, hashedPassword]);
    res.json({ message: "Usuario registrado" });
  } catch (error) {
    res.status(400).json({ error: "El usuario ya existe" });
  }
});

// Inicio de sesión
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

  if (result.rows.length === 0 || !(await bcrypt.compare(password, result.rows[0].password))) {
    return res.status(401).json({ error: "Credenciales incorrectas" });
  }

  const token = jwt.sign({ userId: result.rows[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Inicio de sesión exitoso", token });
});

// Ruta protegida (perfil)
app.get("/profile", async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Acceso denegado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const result = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [decoded.userId]);
    res.json(result.rows[0]);
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
});

// Iniciar servidor
app.listen(5000, () => console.log("Servidor corriendo en http://localhost:5000"));
