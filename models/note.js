const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Note = sequelize.define('note', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    note: {
        type: Sequelize.STRING,
        allowNull: false
    },
    other: {
        type: Sequelize.STRING,
        allowNull: false
    },
    other2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN,
        default: false
    },
    tarih: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Note;
