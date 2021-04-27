const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/db');
const Operations = require('./Operations');

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    repeatPassword: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
});

Users.hasMany(Proyectos);

module.exports = Users;
