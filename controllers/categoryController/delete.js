const Category = require('../../models/Category');

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const category = await  Category.findByPk(id);

    if (!category) {
      res.status(404).json({
        status: 404,
        message: 'Category not found' });
    }

    await category.destroy();

    res.status(200).json({
        status: 200,
        message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ 
        status: 500,
        message: 'Internal Server Error',
        error: error.message 
    });
  }
};

module.exports = deleteCategory
