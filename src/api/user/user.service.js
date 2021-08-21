import pool from "../../dbconfig/database.js";

const getUsers = (callBack) => {
  pool.query(`select * from user`, [], (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results);
  });
};
export const registerUser = (data, callBack) => {
  pool.query('INSERT INTO `user`(`device_id`, `name`, `user_email`, `role`, `profile_pic`, `password`, `register_time`) VALUES (?,?,?,?,?,?,?)',
    data,
    (error, results, fields) => {
      if (error) {
        callBack(error)
      }
      return callBack(null, results);
    }
  )
}
export default getUsers;
