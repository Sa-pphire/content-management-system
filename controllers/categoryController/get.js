const Category = require('../../models/Category');

const getCategories = async (req,res) => {
    try {
        const categories = await Category.findAll()

        res.status(200).json({
            status: 200,
            data: categories
        })

    } catch (error) {
        res.status(500).json({
            status:500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = getCategories;