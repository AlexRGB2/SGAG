"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
// Creado y editado por Alexis Martínez Bárcenas

var pagoSchema = new _mongoose.Schema({
  productos: {
    type: Array,
    require: true
  },
  tipoPago: {
    type: String,
    require: true
  },
  fecha: {
    type: Date,
    require: true
  },
  total: {
    type: Number,
    require: true
  }
});
var _default = (0, _mongoose.model)("pago", pagoSchema);
exports["default"] = _default;