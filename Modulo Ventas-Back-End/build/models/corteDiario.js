"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
// Creado y editado por Juan de Dios Ramírez Campos

var corteDiarioSchema = new _mongoose.Schema({
  totalEfectivo: {
    type: Number
  },
  totalPaypal: {
    type: Number
  },
  total: {
    type: Number,
    require: true
  },
  fecha: {
    type: Date,
    require: true
  }
});
var _default = (0, _mongoose.model)("corteDiario", corteDiarioSchema);
exports["default"] = _default;