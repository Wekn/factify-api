import getUsers, { registerUser, singleUser } from "./user.service.js";

// get all user controller
const getAllUsers = (req, res) => {
  getUsers((err, result) => {
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
  });
};
export const getSingleuser=(req, res)=>{
  // return res.json({
  //   status: true,
  //   uid: req.params.uid
  // })
    singleUser(req.params.uid, (err, result)=>{
      if (err) {
        console.log(err);
        return res.json({
          status: true,
          message: "Failed",
          error: err
        });
      } else {
        return res.json({
          status: true,
          message: "Success",
          data: result
        });
      }
    })
}

export const registerNewUser = (req, res) => {
  // return res.json({
  //   status:true,
  //   message: "Data comes",
  //   data: req.body
  // })
  registerUser(req.body, (err, result) => {
    if (err) {
      console.log(err);
      return res.json({
        status: true,
        message: "User not registered",
        error: err
      });
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
