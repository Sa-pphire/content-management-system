const { Router } = require("express");
const passwordController = require("../controllers/passwordController");

const router = Router();

router.post("/create", passwordController.send )



module.exports = router