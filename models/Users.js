const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/db');
const Operations = require('./Operations');
const bcrypt = require('bcrypt-nodejs');

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Add a valid email"
            }
        },
        unique: {
            args: true,
            msg: "User already registered"
        }
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
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "The password can´t be empty"
            }
        }
    }
}, {
    hooks: {
        beforeCreate(users) {
            users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10));
        }
    }
}
);

Users.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

//Users.hasMany(Operations);

module.exports = Users;
