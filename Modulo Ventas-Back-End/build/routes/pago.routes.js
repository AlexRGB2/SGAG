"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pago = require("../controllers/pago.controller");
// Creado y editado por Victor Garay Montes

var router = (0, _express.Router)();
router.get('/api/Pago/', _pago.getPagos);
router.post('/api/Pago/', _pago.addPago);
router["delete"]('/api/Pago/:id', _pago.removePago);
router.post('/api/CorteDiarioAdd/', _pago.addCorteDiario);
router.get('/api/Cortes/', _pago.getCortes);
router.get('/api/CorteDiario/', _pago.getCorteDiario);
router.get('/api/CorteMes/:mes', _pago.getCorteMes);
router.get('/api/CorteAnio/:anio', _pago.getCorteA);
var _default = router;
exports["default"] = _default;