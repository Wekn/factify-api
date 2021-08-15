import express from "express";
import getCategories from "./Category/category.controller.js";
import getAllUsers from "./user/user.controller.js";
const Api = express();
Api.get("/", (req, res) => {
  res.json({
    status: true,
    message: "This rest api works"
  });
});

Api.get("/categories", getCategories);
Api.post("/users", getAllUsers);

export { Api };
