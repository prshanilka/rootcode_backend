const {
  createComment,
  getComment,
} = require("./comment.service");
module.exports = {
  createComment: (req, res) => {
    const body = req.body;
    console.log(body);
    createComment(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getComment: (req, res) => {
    const post_id = req.params.post_id;
    getComment(post_id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
