const { DataTypes } = require("sequelize");
const sequelize = require("../connection/conexion");

const Producto = sequelize.define('Producto', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    codigo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precioUnitario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Producto;