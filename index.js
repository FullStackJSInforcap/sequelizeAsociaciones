const Cliente = require("./models/cliente");
const DetalleOrden = require("./models/detalleOrden");
const Direccion = require("./models/direccion");
const Empleado = require("./models/empleado");
const Orden = require("./models/orden");
const Producto = require("./models/producto");

DetalleOrden.sync({alter: true});

