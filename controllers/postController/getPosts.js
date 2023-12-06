const Post = require('../../models/Post');

const getPosts = async (req,res) => {
    try {
        const posts = await Post.findAll()

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

module.exports = getPosts;