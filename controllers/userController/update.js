const User = require("../../models/User");

const update = async (req, res) => {
    try {
        const { id } = req.params
        const updatedData = await User.update(req.body, {
          where: { id: id },
        });
        res.status(200).json({
            status: 200,
            id: id,
            message: "User profile updated successfully"
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