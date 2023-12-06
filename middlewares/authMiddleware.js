const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      res.status(401).json({ 
        status: 401,
        error: 'Unauthorized - Missing Bearer Token' 
    });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      req.user = decoded;
  
      next();
    } catch (error) {
      res.status(401).json({ 
        status: 401,
        error: 'Unauthorized - Missing Bearer Token' 
    });
    }
  };

module.exports = authenticate