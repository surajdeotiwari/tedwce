const express = require("express");
const post_route = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const postModel = require("../model/postModel")
post_route.use(bodyParser.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/postImages"));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
post_route.use(bodyParser.urlencoded({ extended: true }));

post_route.use(express.static("public"));


const upload = multer({ storage: storage });

const postController = require("../controller/postController");

// Add validation middleware here for file uploads if needed.

post_route.post(
  "/create-post",
  upload.single("image"),
  postController.createPost
);

module.exports = post_route;
