import express from "express";
import { Api } from "./src/api/index.js";
// require('dotenv').config();
import dotenv from "dotenv";
dotenv.config();

const port = process.env.APP_PORT || 3001;
const app = express();

app.use(express.json()); // to support JSON-encoded bodies
// app.use(express.urlencoded()); //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", Api);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Factify app"
  });
});
app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
