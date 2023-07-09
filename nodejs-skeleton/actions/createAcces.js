const connection = require('./connectDatabase').db();
const Access = require('../models/acces');

module.exports = () => {
  connection.sync().then(() => Access.create({
    date: new Date().toDateString(),
  })).then((access) => {
    console.log(access.get({
      plain: true
    }));
  });
};
