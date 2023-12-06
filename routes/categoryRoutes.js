const { Router } = require("express");
const categoryController = require("../controllers/categoryController");
const authenticate = require('../middlewares/authMiddleware')

const router = Router();

router.post("/create", authenticate, categoryController.createCategory )

router.get("/", authenticate, categoryController.getCategories )

router.put("/:id/update", authenticate, categoryController.updateCategory )

router.delete("/:id/delete", authenticate, categoryController.deleteCategory )



module.exports = router