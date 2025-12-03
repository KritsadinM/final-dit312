const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/movies', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM movies");
    res.json(rows);
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ error: "db error" });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
