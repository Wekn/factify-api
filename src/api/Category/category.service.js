import pool from "../../dbconfig/database.js";

const getcategory = (callBack) => {
  pool.query(`select * from category`, [], (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results);
  });
};
export default getcategory;
