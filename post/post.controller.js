const {
  createPost,
  getPosts,
} = require("./post.service");
module.exports = {
  createPost: (req, res) => {
    const body = req.body;
    console.log(body);
    createPost(body, (err, results) => {
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
  getPosts: (req, res) => {
    getPosts((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results,
        });
      });

  },
};
