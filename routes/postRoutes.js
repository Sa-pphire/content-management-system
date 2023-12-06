const { Router } = require("express");
const postController = require("../controllers/postController");
const PostValidator = require('../validators/PostValidator')
const authenticate = require('../middlewares/authMiddleware')

const router = Router();

router.post("/:userId/create", authenticate, PostValidator.create, postController.createPost )

router.get("/", authenticate, postController.getPosts )

router.get("/:id", authenticate, PostValidator.get, postController.getPost )

router.put("/:id/update", authenticate, PostValidator.get, postController.updatePost )

router.delete("/:id/delete", authenticate, PostValidator.get, postController.deletePost )

router.get("/:userId/get", authenticate, postController.getPostsById)


module.exports = router