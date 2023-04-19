"use strict";

require("./database/connection");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Creado y editado por Victor Garay Montes

_app["default"].listen(_app["default"].get('port'));
console.log("Server on port", _app["default"].get('port'));