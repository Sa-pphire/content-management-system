const { Router } = require("express");
const postController = require("../controllers/postController");

const router = Router();

router.post("/:userId/create", postController.createPost )

router.get("/", postController.getPosts )

router.get("/:id", postController.getPost )

router.put("/:id/update", postController.updatePost )

router.delete("/:id/delete", postController.deletePost )

router.get("/:userId/get", postController.getPostsById)


module.exports = router