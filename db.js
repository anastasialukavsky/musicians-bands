const path = require('path');
const { Sequelize, Model } = require('sequelize');


// TODO - connect to db via sequelize

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
});

module.exports = {
  Sequelize,
  db,
};
