"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePago = exports.getPagos = exports.getCortes = exports.getCorteMes = exports.getCorteDiario = exports.getCorteA = exports.addPago = exports.addCorteDiario = void 0;
var _pago = _interopRequireDefault(require("../models/pago"));
var _producto3 = _interopRequireDefault(require("../models/producto"));
var _corteDiario = _interopRequireDefault(require("../models/corteDiario"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Obtener pagos o ventas
var getPagos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var pagos;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _pago["default"].find().lean();
        case 2:
          pagos = _context.sent;
          return _context.abrupt("return", res.json(pagos));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getPagos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Añadir pago
exports.getPagos = getPagos;
var addPago = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, productos, tipoPago, i, producto, _i, data, nombres, pro, precios, _iterator, _step, _producto, total, _iterator2, _step2, _producto2, precio, newPago, pagoData, pagoSave;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, productos = _req$body.productos, tipoPago = _req$body.tipoPago;
          i = 0;
        case 2:
          if (!(i < productos.length)) {
            _context2.next = 13;
            break;
          }
          _context2.next = 5;
          return _producto3["default"].findOne({
            nombreProducto: productos[i].nombre
          });
        case 5:
          producto = _context2.sent;
          if (producto) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return", res.json({
            msg: "product not found"
          }));
        case 8:
          if (!(producto.cantidad < productos[i].cantidad)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.json({
            msg: "cantidad not found"
          }));
        case 10:
          i++;
          _context2.next = 2;
          break;
        case 13:
          _i = 0;
        case 14:
          if (!(_i < productos.length)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 17;
          return _producto3["default"].findOne({
            nombreProducto: productos[_i].nombre
          }, {
            cantidad: true
          });
        case 17:
          data = _context2.sent;
          _context2.next = 20;
          return _producto3["default"].updateOne({
            nombreProducto: productos[_i].nombre
          }, {
            $set: {
              cantidad: data.cantidad - productos[_i].cantidad
            }
          });
        case 20:
          _i++;
          _context2.next = 14;
          break;
        case 23:
          nombres = productos.map(function (x) {
            return x.nombre;
          });
          _context2.next = 26;
          return _producto3["default"].find({
            nombreProducto: {
              $in: nombres
            }
          }, {
            nombreProducto: true,
            precio: true,
            _id: false
          });
        case 26:
          pro = _context2.sent;
          precios = {};
          _iterator = _createForOfIteratorHelper(pro);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _producto = _step.value;
              precios[_producto.nombreProducto] = _producto.precio;
            }

            // Luego, puedes calcular el total recorriendo el arreglo de productos comprados y sumando los precios
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          total = 0;
          _iterator2 = _createForOfIteratorHelper(productos);
          _context2.prev = 32;
          _iterator2.s();
        case 34:
          if ((_step2 = _iterator2.n()).done) {
            _context2.next = 43;
            break;
          }
          _producto2 = _step2.value;
          precio = precios[_producto2.nombre];
          if (!(precio === undefined)) {
            _context2.next = 40;
            break;
          }
          // Si el producto no existe en la base de datos, no se puede calcular el precio y se muestra un error
          console.error("El producto ".concat(_producto2.nombre, " no est\xE1 en la base de datos"));
          return _context2.abrupt("continue", 41);
        case 40:
          total += precio * _producto2.cantidad;
        case 41:
          _context2.next = 34;
          break;
        case 43:
          _context2.next = 48;
          break;
        case 45:
          _context2.prev = 45;
          _context2.t0 = _context2["catch"](32);
          _iterator2.e(_context2.t0);
        case 48:
          _context2.prev = 48;
          _iterator2.f();
          return _context2.finish(48);
        case 51:
          newPago = {
            productos: productos,
            tipoPago: tipoPago,
            fecha: new Date(new Date()),
            total: total
          };
          _context2.next = 54;
          return (0, _pago["default"])(newPago);
        case 54:
          pagoData = _context2.sent;
          _context2.next = 57;
          return pagoData.save();
        case 57:
          pagoSave = _context2.sent;
          return _context2.abrupt("return", res.json(pagoSave));
        case 59:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[32, 45, 48, 51]]);
  }));
  return function addPago(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Eliminar pago
exports.addPago = addPago;
var removePago = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, pagoData, removePago;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return _pago["default"].findOne({
            _id: id
          });
        case 3:
          pagoData = _context3.sent;
          if (pagoData) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.json({
            msg: "pago not found"
          }));
        case 6:
          _context3.next = 8;
          return _pago["default"].remove({
            _id: id
          });
        case 8:
          removePago = _context3.sent;
          return _context3.abrupt("return", res.json(removePago));
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function removePago(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Añadir corte diario
exports.removePago = removePago;
var addCorteDiario = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var count, totalPaypal, totalEfectivo, totalDia, countTotal, countTotalPaypal, countTotalEfectivo, nuevoCorte, dia, save, _totalPaypal, _totalEfectivo, _totalDia, _countTotal, _countTotalPaypal, _countTotalEfectivo, update;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _corteDiario["default"].find({
            fecha: {
              $eq: new Date(new Date().setHours(0, 0, 0, 1))
            }
          }).count();
        case 2:
          count = _context4.sent;
          if (!(count == 0)) {
            _context4.next = 25;
            break;
          }
          _context4.next = 6;
          return _pago["default"].find({
            tipoPago: "Paypal",
            fecha: {
              $gte: new Date(new Date().setHours(0, 0, 0, 0)),
              $lt: new Date(new Date().setHours(23, 59, 59, 999))
            }
          });
        case 6:
          totalPaypal = _context4.sent;
          _context4.next = 9;
          return _pago["default"].find({
            tipoPago: "Efectivo",
            fecha: {
              $gte: new Date(new Date().setHours(0, 0, 0, 0)),
              $lt: new Date(new Date().setHours(23, 59, 59, 999))
            }
          });
        case 9:
          totalEfectivo = _context4.sent;
          _context4.next = 12;
          return _pago["default"].find({
            fecha: {
              $gte: new Date().setHours(0, 0, 0, 0),
              $lt: new Date(new Date().setHours(23, 59, 59, 999))
            }
          });
        case 12:
          totalDia = _context4.sent;
          countTotal = 0;
          totalDia.forEach(function (data) {
            countTotal += data.total;
          });
          countTotalPaypal = 0;
          totalPaypal.forEach(function (data) {
            countTotalPaypal += data.total;
          });
          countTotalEfectivo = 0;
          totalEfectivo.forEach(function (data) {
            countTotalEfectivo += data.total;
          });
          nuevoCorte = {
            total: countTotal,
            fecha: new Date().setHours(0, 0, 0, 1),
            totalEfectivo: countTotalEfectivo,
            totalPaypal: countTotalPaypal
          };
          dia = (0, _corteDiario["default"])(nuevoCorte);
          save = dia.save();
          res.json(save);
          _context4.next = 44;
          break;
        case 25:
          _context4.next = 27;
          return _pago["default"].find({
            tipoPago: "Paypal",
            fecha: {
              $gte: new Date(new Date().setHours(0, 0, 0, 0)),
              $lt: new Date(new Date().setHours(23, 59, 59, 999))
            }
          });
        case 27:
          _totalPaypal = _context4.sent;
          _context4.next = 30;
          return _pago["default"].find({
            tipoPago: "Efectivo",
            fecha: {
              $gte: new Date(new Date().setHours(0, 0, 0, 0)),
              $lt: new Date(new Date().setHours(23, 59, 59, 999))
            }
          });
        case 30:
          _totalEfectivo = _context4.sent;
          _context4.next = 33;
          return _pago["default"].find({
            fecha: {
              $gte: new Date(new Date().setHours(0, 0, 0, 0)),
              $lt: new Date(new Date().setHours(23, 59, 59, 999))
            }
          });
        case 33:
          _totalDia = _context4.sent;
          _countTotal = 0;
          _totalDia.forEach(function (data) {
            _countTotal += data.total;
          });
          _countTotalPaypal = 0;
          _totalPaypal.forEach(function (data) {
            _countTotalPaypal += data.total;
          });
          _countTotalEfectivo = 0;
          _totalEfectivo.forEach(function (data) {
            _countTotalEfectivo += data.total;
          });
          _context4.next = 42;
          return _corteDiario["default"].updateOne({
            fecha: {
              $eq: new Date().setHours(0, 0, 0, 1)
            }
          }, {
            $set: {
              total: _countTotal,
              totalEfectivo: _countTotalEfectivo,
              totalPaypal: _countTotalPaypal
            }
          });
        case 42:
          update = _context4.sent;
          res.json(update);
        case 44:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function addCorteDiario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Obtener cortes
exports.addCorteDiario = addCorteDiario;
var getCortes = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var cortes;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _corteDiario["default"].find();
        case 2:
          cortes = _context5.sent;
          return _context5.abrupt("return", res.json(cortes));
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getCortes(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// Obtener corte del día actual
exports.getCortes = getCortes;
var getCorteDiario = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var corte;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _corteDiario["default"].find({
            fecha: {
              $eq: new Date(new Date().setHours(0, 0, 0, 1))
            }
          });
        case 2:
          corte = _context6.sent;
          return _context6.abrupt("return", res.json(corte));
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getCorteDiario(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// Obtener corte por mes
exports.getCorteDiario = getCorteDiario;
var getCorteMes = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var mes, startOfMonth, endOfMonth, cortes;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          mes = req.params.mes;
          startOfMonth = new Date(Date.UTC(2023, mes - 1, 1)); // primer día del mes
          endOfMonth = new Date(Date.UTC(2023, mes, 1)); // primer día del siguiente mes
          _context7.next = 5;
          return _corteDiario["default"].find({
            fecha: {
              $gte: startOfMonth,
              $lt: endOfMonth
            }
          });
        case 5:
          cortes = _context7.sent;
          return _context7.abrupt("return", res.json(cortes));
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getCorteMes(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

// Obtener corte por año
exports.getCorteMes = getCorteMes;
var getCorteA = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var anio, cortes;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          anio = req.params.anio;
          _context8.next = 3;
          return _corteDiario["default"].find({
            $expr: {
              $eq: [{
                $year: "$fecha"
              }, anio]
            }
          });
        case 3:
          cortes = _context8.sent;
          return _context8.abrupt("return", res.json(cortes));
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getCorteA(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getCorteA = getCorteA;