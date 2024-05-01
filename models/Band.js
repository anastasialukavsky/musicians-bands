const { Sequelize, db } = require('../db');
const { DataTypes } = require('sequelize');

// TODO - define the Band model
let Band = db.define('band', {
  name: {
    type: DataTypes.STRING,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

module.exports = {
  Band,
};
