const { db } = require('../db');
const { DataTypes } = require('sequelize');

const Manager = db.define('Manager', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  dateHired: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Manager;
