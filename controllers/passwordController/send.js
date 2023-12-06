const User = require('../../models/User')
const ResetToken = require('../../models/ResetToken')
const crypto = require('crypto')

const send = async (req, res) => {

    const { email } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        res.status(404).json({
            status: 404,
            error: 'User not found' });
      }
  
      // Generate a unique token
      const token = crypto.randomBytes(20).toString('hex');
  
      // Set token expiration to an hour
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 1);
  
      await ResetToken.create({
        userId: user.id,
        token,
        expiresAt,
      });
  
      res.status(200).json({ 
        status: 200,
        message: 'Password reset token sent successfully',
        token   
        });
    } catch (error) {
        res.status(500).json({ 
            status: 500,
            message: 'Internal Server Error',
            error: error.message
         });
    }
  };

module.exports = send