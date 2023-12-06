const { Router } = require("express");
const postController = require("../controllers/postController");
const authenticate = require('../middlewares/authMiddleware')

const router = Router();

router.post("/:userId/create", authenticate, postController.createPost )

router.get("/", authenticate, postController.getPosts )

router.get("/:id", authenticate, postController.getPost )

router.put("/:id/update", authenticate, postController.updatePost )

router.delete("/:id/delete", authenticate, postController.deletePost )

router.get("/:userId/get", authenticate, postController.getPostsById)


module.exports = router