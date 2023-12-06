const Post = require('../../models/Post');
const Category = require('../../models/Category')

const createPost = async (req,res) => {
    const { userId } = req.params; 
    const{ title, author, cover_image, content, category} = req.body;

    // Calculate read time using average words per minute
    const wpm = 225;
    const numWords = content.trim().split(/\s+/).length;
    const read_time = Math.ceil(numWords / wpm);

    // Get category id from the category name
    const postCategory = await Category.findOne({where:{name: category}})

    Post.create({
        title, 
        cover_image,
        author, 
        content,
        read_time,
        userId,
        categoryId: postCategory.id

    }).then(data => {
        res.status(201).json({
                status: 201,
                message: "Post created successfully",
                data: data
        });
        }).catch((error) =>{
            res.status(500).json({
                status: 500,
                error: error
            });
        });
}

module.exports = createPost;