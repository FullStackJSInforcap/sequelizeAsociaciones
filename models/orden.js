const { DataTypes } = require("sequelize");
const sequelize = require("../connection/conexion");
const Cliente = require("./cliente");
const Empleado = require("./empleado");

const Orden = sequelize.define('Orden', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    }, 
    fechaOrden: {
        type: DataTypes.DATE
    },
    fechaEntrega: {
        type: DataTypes.DATE
    },
    fechaSolicitada: {
        type: DataTypes.DATE
    }
});

Cliente.hasMany(Orden);
Orden.belongsTo(Cliente);

Empleado.hasMany(Orden);
Orden.belongsTo(Empleado);

module.exports = Orden;