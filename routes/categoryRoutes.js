const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const router = Router();

router.post("/create", categoryController.createCategory )



module.exports = router