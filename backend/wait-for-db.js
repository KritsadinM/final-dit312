const mysql = require('mysql2/promise');

async function waitForDB() {
  const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  };

  for (let i = 0; i < 20; i++) {
    try {
      const conn = await mysql.createConnection(config);
      await conn.end();
      console.log("MySQL is ready!");
      return;
    } catch (err) {
      console.log("Waiting for DB... retry:", i + 1);
      await new Promise(res => setTimeout(res, 3000));
    }
  }

  console.error("❌ Cannot connect to DB");
  process.exit(1);
}

waitForDB();