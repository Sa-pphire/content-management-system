const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define(
  'categories',
  {
    name:{
      type: DataTypes.STRING(255),
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

module.exports = Category;
