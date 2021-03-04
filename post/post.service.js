const pool = require("../config/database");
module.exports = {
  createPost: (data,callBack) => {
    pool.query(
      `INSERT INTO post(post_title,post_des,post_t_color) VALUES (?,?,?)`,
      [data.title, data.color,data.description],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPosts: (callBack) => {
    pool.query(`SELECT post.postID,post.post_title,post.post_des,post.post_t_color,COUNT(cID) AS comments FROM post,comment where post.postID=comment.postID`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  
 
};
