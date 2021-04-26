const {Sequelize, DataTypes} = require('sequelize');

const db = require('../config/db');

const Operation = db.define('operation', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT(8, 2),
    date: DataTypes.DATEONLY,
    type: DataTypes.STRING
});

module.exports = Operation;