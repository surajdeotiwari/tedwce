const Post = require("../model/postModel");

const createPost = async (req, res) => {
  try {
    const post = new Post({
      fname: req.body.fname,
      lname: req.body.lname,
      college: req.body.college,
      mobile: req.body.mobile,
      email:req.body.email,
      image: req.file.path,
    });
    const postData = await post.save();
    res.status(200).send({ success: true, msg: "Post Data", Data: postData });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

module.exports = {
  createPost,
};
