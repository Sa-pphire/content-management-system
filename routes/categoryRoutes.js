const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const router = Router();

router.post("/create", categoryController.createCategory )

router.get("/", categoryController.getCategories )

router.put("/:id/update", categoryController.updateCategory )

router.delete("/:id/delete", categoryController.deleteCategory )



module.exports = router