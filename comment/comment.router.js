const router = require("express").Router(); 
const {
  createComment,
  getComment
} = require("./comment.controller");
router.post("/", createComment);
router.get("/:post_id",getComment);
module.exports = router;