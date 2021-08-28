import express from "express";
import getCategories from "./Category/category.controller.js";
import getAllUsers, { registerNewUser, getSingleuser } from "./user/user.controller.js";
const Api = express();
Api.get("/", (req, res) => {
  res.json({
    status: true,
    message: "This rest api works"
  });
});

Api.get("/category", getCategories);
Api.get("/user", getAllUsers);
Api.get("/user/:uid", getSingleuser);
Api.post("/user", registerNewUser);
export { Api };
