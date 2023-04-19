"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("./config"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _pago = _interopRequireDefault(require("./routes/pago.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Creado y editado por Victor Garay Montes

var app = (0, _express["default"])();
app.set("port", _config["default"].port);
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_index["default"]);
app.use(_products["default"]);
app.use(_pago["default"]);
var _default = app;
exports["default"] = _default;