const Post = require('../../models/Post');

const getPostsById = async (req,res) => {
    try {
        const { userId } = req.params

        const posts = await Post.findAll({where: { userId: userId }})

        res.status(200).json({
            status: 200,
            data: posts
        })

    } catch (error) {
        res.status(500).json({
            status:500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = getPostsById;