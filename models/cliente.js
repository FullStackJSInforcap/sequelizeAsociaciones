const { DataTypes } = require("sequelize");
const sequelize = require("../connection/conexion");
const Direccion = require("./direccion");

const Cliente = sequelize.define('Cliente', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

Cliente.hasOne(Direccion);
Direccion.belongsTo(Cliente);

module.exports = Cliente;