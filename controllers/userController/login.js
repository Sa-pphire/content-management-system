const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists in the database
        const user = await User.findOne({ where: { email } });

        if (!user) return res.status(404).json({ message: "User not found" });

        // Check if the user password matches
        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Invalid password" });

        // Encrypt user id in jwt
        const jwt_payload = {
            id: user.id,
        };

        const token = jwt.sign(jwt_payload, process.env.JWT_SECRET);

        res.header("Authorization", `Bearer ${token}`);

        return res.status(200).json({
            status: 200,
            message: "Login successful",
            data: {
            token,
            user: {
                id: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
            },
            },
        });
        
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = login;