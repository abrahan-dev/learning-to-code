let db;
const Sequelize = require('sequelize');
const config = require('../config/database/login');

module.exports.db = () => {
  if (db === undefined) {
    db = new Sequelize(
      config.database,
      config.username,
      config.password,
      {
        host: config.host,
        dialect: config.dialect,
        pool: {
          max: 5,
          min: 0,
          idle: 10000,
        },
      });
  }
  return db;
};
