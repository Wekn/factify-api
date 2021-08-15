import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 10
});


export default pool;
