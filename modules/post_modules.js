const mongoose = require("mongoose");
const CommentSchema = require("./comments_modules");
const { Schema } = mongoose;

const postSchema = new Schema({
  postData: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PostSchema", postSchema);
