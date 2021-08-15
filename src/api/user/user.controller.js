import getUsers from "./user.service.js";

const getAllUsers = (req, res) => {
  console.log(req.body.key);

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
        message: "Key ABC",
      });
    }
  });

};
export default getAllUsers;