const { get } = require("mongoose");
const commentsModel = require("../modules/comments_modules");

const addComment = async (req, res) => {
  try {
    const comment = new commentsModel(req.body);
    await comment.save();
    res.send(comment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllComments = async (req, res) => {
  try {
    const comments = await commentsModel.find();
    res.send(comments);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getCommentById = async (req, res) => {
  const commentId = req.params.id;
  try {
    const comment = await commentsModel
      .findById(commentId)
    if (comment != null) res.send(comment);
    else res.status(400).send("comment not found");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

const updateCommentById = async (req, res) => {
  const commentId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedPost = await commentsModel.findByIdAndUpdate(commentId, updatedData, {
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

const deleteCommentById = async (req, res) => {
  const commentId = req.params.id;

  try {
    const comment = await commentsModel.findByIdAndDelete(commentId);
    if (!comment) {
      return res.status(404).send("Comment not found");
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllComments,
  addComment,
  updateCommentById,
  getCommentById,
  deleteCommentById,
};
