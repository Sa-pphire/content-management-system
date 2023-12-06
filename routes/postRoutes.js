const { Router } = require("express");
const postController = require("../controllers/postController");

const router = Router();

router.post("/:userId/create", postController.createPost )

router.get("/", postController.getPosts )

router.get("/:id", postController.getPost )

router.get("/update/:id", postController.updatePost )

router.get("/delete/:id", postController.deletePost )

router.get("/get/:userId", postController.getPostsById)


module.exports = router