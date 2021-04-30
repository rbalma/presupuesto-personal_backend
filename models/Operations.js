const {Sequelize, DataTypes} = require('sequelize');

const db = require('../config/db');

const Operation = db.define('operation', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: DataTypes.STRING(100),
    price: DataTypes.FLOAT(8, 2),
    date: DataTypes.DATEONLY,
    type: DataTypes.STRING(10),
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
});

module.exports = Operation;