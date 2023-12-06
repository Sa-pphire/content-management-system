const Post = require('../../models/Post');

const createPost = async (req,res) => {
    const { userId } = req.params; 
    const{ title, author, cover_image, content} = req.body;

    // Calculate read time using average words per minute
    const wpm = 225;
    const numWords = content.trim().split(/\s+/).length;
    const read_time = Math.ceil(numWords / wpm);

    Post.create({
        title:title, 
        cover_image: cover_image,
        author:author, 
        content:content,
        read_time: read_time,
        userId,
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