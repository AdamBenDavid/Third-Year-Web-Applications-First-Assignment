const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts_controller");

router.get("/", postsController.getAllPosts);

router.get("/filter", postsController.getPostBySenderId);

router.post("/", postsController.addPost);

router.get("/:id", postsController.getPostById);

router.delete("/", postsController.deletePosts);

router.put("/:id", postsController.updatePostById);

module.exports = router;
