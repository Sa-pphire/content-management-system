const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/signup", userController.create )

router.post("/login", userController.login)

router.get("/", userController.getUsers)

router.put("/:id/update", userController.update)

router.get("/logout", userController.logout)

module.exports = router