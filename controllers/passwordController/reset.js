const User = require('../../models/User')
const ResetToken = require('../../models/ResetToken')
const bcrypt = require('bcrypt') 

const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
  
    try {
      const passwordReset = await ResetToken.findOne({
        where: {
          token,
          expiresAt: {
            [Op.gt]: new Date(),
          },
        },
      });
  
      if (!passwordReset) {
        res.status(400).json({ 
            status: 400,
            error: 'Invalid or expired token' 
        });
      }
  
      const user = await User.findByPk(passwordReset.userId);
  
      if (!user) {
        res.status(404).json({
            status: 404,
            error: 'User not found' 
        });
      }
      // Hash new password
      const hashed_password = bcrypt.hashSync(newPassword, 10);

      // Update user's password and delete the token
      await user.update({ password: hashed_password });
      await passwordReset.destroy();
  
      res.status(200).json({
        status: 200, 
        message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ 
            status: 500,
            message: 'Internal Server Error',
            error: error.message
        });
    }
  };

module.exports = resetPassword