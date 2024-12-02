const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  postId: {
    type: String,
    required: true,
  },
  senderId: {
    type: String,
    required: true,
  },
  postData: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("PostSchema", postSchema);
