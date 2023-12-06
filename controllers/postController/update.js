const Post = require("../../models/Post");

const update = async (req, res) => {
    try {
        const { id } = req.params
        const updatedData = await Post.update(req.body, {
          where: { id: id },
        });
        res.status(200).json({
            status: 200,
            id: id,
            message: "Post updated successfully"
        })
      } catch (error) {
          res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            err: error.message
            })
      }
};

module.exports = update;