const Post = require('../../models/Post');

const getPost = async (req,res) => {
    try {
        const id = req.params.id;
        const post = await Post.findByPk(id)

        if (!post) {
            res.status(404).json({
                status: 404,
                message: "Post not found"
            })
        }
        
        res.status(200).json({
            status:200,
            data: post,
        })

    } catch (error) {
        res.status(500).json({
            status:500,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

module.exports = getPost;