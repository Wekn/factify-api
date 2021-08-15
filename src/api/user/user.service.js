import pool from "../../dbconfig/database.js";

const getUsers = (callBack) => {
  pool.query(`select * from user`, [], (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results);
  });
};
export default getUsers;
