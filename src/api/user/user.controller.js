import getUsers, { registerUser } from "./user.service.js";

// get all user controller
const getAllUsers = (req, res) => {
  getUsers((err, result) => {
    if (req.body.key == "ABC") {
      if (err) {
        console.log(err);
        return;
      } else {
        return res.json({
          status: true,
          message: "All Users",
          data: result
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Key ABC"
      });
    }
  });
};

export const registerNewUser = (req, res) => {
  registerUser(req.body, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      return res.json({
        status: true,
        message: "User registered successfully",
        data: result
      });
    }
  });
};
export default getAllUsers;
