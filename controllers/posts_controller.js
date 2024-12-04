const { get } = require("mongoose");
const postModel = require("../modules/post_modules");

const addPost = async (req, res) => {
  try {
    const post= new postModel(req.body);
    await post.save();
    res.send(post);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await postModel.findById(postId);
    if (post != null) res.send(post);
    else res.status(400).send("post not found");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deletePosts = async (req, res) => {
  try {
    const posts = await postModel.deleteMany();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


// פונקציה לקבלת פוסטים לפי senderId
// const getPostBySenderId = async (req, res) => {
//   try {
//     const senderId = req.query.senderId;
//     if(!senderId){
//       return res.status(400).send("senderId is required");
//     } 
//     const posts = await postModel.find({senderId});
//     res.send(posts);
// }
// catch (error) {
//   res.status(400).send(error.message);
// }
// };

const updatePostById = async (req, res) => {
  const postId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedPost = await postModel.findByIdAndUpdate(postId, updatedData, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).send("Post not found");
    }
    res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Controller to get posts by sender
const getPostBySenderId = async (req, res) => {
  const senderId = req.query.senderId; // senderId מגיע מה-Query

  if (!senderId) {
    return res.status(400).json({ error: "Sender ID is required" });
  }

  try {
    const posts = await postModel.find({ senderId }); // חיפוש לפי senderId

    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts found for the given sender" });
    }

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllPosts,
  addPost,
  getPostById,
  deletePosts,
  getPostBySenderId,
  updatePostById,
};
