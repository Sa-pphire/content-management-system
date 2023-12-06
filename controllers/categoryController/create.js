const Category = require('../../models/Category')

const createCategory = async (req,res) => {
    const{ name } = req.body;

    Category.create({
        name,

    }).then(data => {
        res.status(201).json({
                status: 201,
                message: "Category created successfully",
                data: data
        });
        }).catch((error) =>{
            res.status(500).json({
                status: 500,
                error: error
            });
        });
}

module.exports = createCategory;