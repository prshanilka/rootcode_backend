var cors = require('cors')
require("dotenv").config();
const express = require("express");
const app = express();
const postRouter = require("./post/post.router");
const commentRouter = require("./comment/comment.router");
app.use(express.json());
app.use(cors());

app.use("/post",cors(), postRouter);
app.use("/comment",cors(),commentRouter);
app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running " + process.env.APP_PORT);
});


