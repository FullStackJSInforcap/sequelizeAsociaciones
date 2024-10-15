const { DataTypes } = require("sequelize");
const sequelize = require("../connection/conexion");
const Orden = require("./orden");
const Producto = require("./producto");

const DetalleOrden = sequelize.define('DetalleOrden', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    ordenId: {
        type: DataTypes.INTEGER,
        references: {
            model: Orden,
            key: 'id',
        }
    },
    productoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id'
        }
    }
});

module.exports = DetalleOrden;