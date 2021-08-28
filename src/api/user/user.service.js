import pool from "../../dbconfig/database.js";
import bcrypt from 'bcrypt';
import dateTime from 'node-datetime';
const getUsers = (callBack) => {
  pool.query(`SELECT * from user ORDER BY register_time DESC`, [], (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results);
  });
};
export const singleUser= (userid, callBack)=>{  
  pool.query(`SELECT * from user WHERE sl=`+userid, [], (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results);
  });
}
export const registerUser = async (data, callBack) => {
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  let date= dateTime.create();
  let formattedDate = date.format('Y-m-d H:M:S');
  // return callBack(null, data);
  pool.query('INSERT INTO `user`(`device_id`, `name`, `user_email`, `role`, `password`,`register_time`) VALUES (?,?,?,?,?,?)',
    [data.device_id, data.name, data.user_email, data.role, data.password, formattedDate],
    (error, results, fields) => {
      if (error) {
        callBack(error)
      }
      return callBack(null, results);
    }
  )
}
export default getUsers;
