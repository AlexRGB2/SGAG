"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _Schema;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var productoSchema = new _mongoose.Schema((_Schema = {
  nombreProducto: {
    type: String,
    require: true
  },
  precio: {
    type: Number,
    require: true
  },
  categoria: {
    type: String,
    require: true
  },
  tipo: {
    type: String,
    require: true
  },
  cantidad: {
    type: Number,
    require: true
  },
  existencia: {
    type: Boolean,
    require: true
  },
  porAgotarce: {
    type: Boolean,
    require: true
  },
  codeBar: {
    type: String,
    require: true
  }
}, _defineProperty(_Schema, "codeBar", {
  type: String,
  require: true
}), _defineProperty(_Schema, "imagen", {
  type: String,
  require: true
}), _Schema));
var _default = (0, _mongoose.model)("productos", productoSchema);
exports["default"] = _default;