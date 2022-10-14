const Sequelize = require('sequelize');

const sequelize = require('../utility/database');

const Endex = sequelize.define('endex', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    saat00: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat01: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat02: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat03: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat04: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat05: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat06: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat07: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat08: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat09: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat10: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat11: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat12: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat13: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat14: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat15: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat16: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat17: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat18: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat19: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat20: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat21: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat22: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    saat23: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    tarih: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Endex;
