const jwt = require('jsonwebtoken');

const handleAuth = async (req, res) => {
    try {
        const { user } = req;
        const payload = {
            id: user.id,
        };
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: 24 * 60 * 60,
        });
        res.status(200).json({
            status: 200,
            token: accessToken,
            data: {
            ...user.dataValues,
            password: undefined,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        })
    }
};

module.exports =  handleAuth ;