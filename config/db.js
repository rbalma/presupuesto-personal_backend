const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('budget', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  operatorsAliases: false,
  define: {
      timestamps: false
  }
});