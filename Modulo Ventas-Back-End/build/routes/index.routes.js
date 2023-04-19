"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _index = require("../controllers/index.controller");
// Creado y editado por Victor Garay Montes

var router = (0, _express.Router)();
router.get('/', _index.getIndex);
var _default = router;
exports["default"] = _default;