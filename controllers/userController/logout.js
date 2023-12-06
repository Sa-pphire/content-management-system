const jwt = require("jsonwebtoken");

const logout = async (req, res) => {
    try {
        const token = req.headers.authorization; 

        if (!token) {
        return res.status(401).json({ 
            status: 401,
            error: 'Unauthorized - Missing Bearer Token' });
        }
        // invalidate token
        const invalidationToken = jwt.sign({ invalidated: true }, process.env.JWT_SECRET , { expiresIn: '1s' });

        res.status(200).json({ 
            STATUS: 200,
            message: 'Logout successful',
            invalidatedToken: invalidationToken });
    
        
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = logout;