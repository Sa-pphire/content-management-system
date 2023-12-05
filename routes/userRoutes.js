const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/signup", userController.create )

module.exports = router