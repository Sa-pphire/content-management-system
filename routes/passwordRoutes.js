const { Router } = require("express");
const passwordController = require("../controllers/passwordController");

const router = Router();

router.post("/forgot", passwordController.send )

router.post("/reset", passwordController.resetPassword )



module.exports = router