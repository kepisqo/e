const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Client = sequelize.define('client', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ip: {
        type: Sequelize.STRING,
        required: true
    },
    uniqueId: {
        type: Sequelize.STRING,
        required: true
    },
    online: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Client;