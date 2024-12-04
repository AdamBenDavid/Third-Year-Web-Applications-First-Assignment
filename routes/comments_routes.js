const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments_controller");

router.get("/", commentsController.getAllComments);

router.post("/", commentsController.addComment);

router.put("/:id", commentsController.updateCommentById);

router.get("/:id", commentsController.getCommentById);

router.delete("/:id", commentsController.deleteCommentById);

module.exports = router;