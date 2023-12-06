const { Router } = require("express");
const postController = require("../controllers/postController");

const router = Router();

router.post("/:userId/create", postController.createPost )

router.get("/", postController.getPosts )

router.get("/:id", postController.getPost )



module.exports = router