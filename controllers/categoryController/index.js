const createCategory = require('./create')
const getCategories = require('./get')
const updateCategory = require('./update')
const deleteCategory = require('./delete')

const categoryController = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
}

module.exports = categoryController