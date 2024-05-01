const { Sequelize, db } = require('../db');
const DataTypes = require('sequelize');

// TODO - define the Song model
let Song = db.define('song', {
  title: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.STRING,
  },
  length: {
    type: DataTypes.NUMBER,
  },
});

module.exports = {
  Song,
};
