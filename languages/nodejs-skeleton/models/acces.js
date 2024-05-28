const Sequelize = require('sequelize');
const connection = require('../actions/connectDatabase').db();

const Access = connection.define('access', {
  date: Sequelize.DATE,
});

module.exports = Access;
