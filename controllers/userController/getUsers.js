const User = require("../../models/User");

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        return res.status(200).json({
            status: 200,
            data: users,
        });
        
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = getUsers;