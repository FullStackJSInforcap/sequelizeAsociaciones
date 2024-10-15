const { DataTypes } = require("sequelize");
const sequelize = require("../connection/conexion");

const Direccion = sequelize.define('Direccion', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    calle: {
        type: DataTypes.INTEGER
    },
    numero: {
        type: DataTypes.INTEGER
    }
});

module.exports = Direccion;