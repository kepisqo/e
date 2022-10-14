const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Subscribe = sequelize.define('subscribe', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    endpoint: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
    expirationTime: {
        type: Sequelize.STRING,
    },
    p256dh: {
        type: Sequelize.STRING,
        allowNull: false
    },
    auth: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Subscribe;
