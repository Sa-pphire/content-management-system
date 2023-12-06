const { Router } = require("express");
const postController = require("../controllers/postController");

const router = Router();

router.post("/:userId/create", postController.createPost )


module.exports = router