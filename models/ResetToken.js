const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const ResetToken = sequelize.define(
  'resetTokens',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

User.hasMany(ResetToken);
ResetToken.belongsTo(User);

module.exports = ResetToken;