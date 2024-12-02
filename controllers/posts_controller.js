const postModel = require("../modules/post_modules");

const addPost = async (req, res) => {
    try {
        const post = new postModel(req.body);
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
}
  catch (error) {
    res.status(400).send(error.message);
  }
};

// const getPostsBySender = async (req, res) => {
//     const filter = req.query.owner;
//     try {
//       if (filter) {
//         const posts = await PostModel.find({ owner: filter });
//         res.send(posts);
//       } else {
//         const posts = await PostModel.find();
//         res.send(posts);
//       }
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   };

  module.exports = {
    getAllPosts,
    addPost,
  };