"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products.controller");
// Creado y editado por Victor Garay Montes

var router = (0, _express.Router)();
router.get('/api/Products/:codeBar', _products.getProductByCodeBar);
router.get('/api/Products/searchName/:name', _products.searchProductByName);
router.get('/api/Products/searchType/:type', _products.searchProductByType);
var _default = router;
exports["default"] = _default;