const Post = require('../../models/Post');

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await  Post.findByPk(id);

    if (!post) {
      res.status(404).json({
        status: 404,
        message: 'User not found' });
    }

    await post.destroy();

    res.status(200).json({
        status: 200,
        message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ 
        status: 500,
        message: 'Internal Server Error',
        error: error.message 
    });
  }
};

module.exports = deletePost
