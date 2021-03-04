const pool = require("../config/database");
module.exports = {
  createComment: (data,callBack) => {
    pool.query(
      `INSERT INTO comment(c_text,postID) VALUES (?,?)`,
      [data.c_text, data.postID],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getComment: (post_id, callBack) => {
    console.log(post_id);
    pool.query(
      `SELECT * FROM comment where postID = ?`,
      [post_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        //console.log(results);
        return callBack(null, results);
      }
    );
  },
 
};
