const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', '123*Ssk*06', {
    dialect: 'mysql',
    host: '3.73.73.245',
    operatorsAliases: false
});

module.exports = sequelize;
