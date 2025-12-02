"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRouter = void 0;
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controllers/clienteController"));
const router = (0, express_1.Router)();
exports.clienteRouter = router;
router.get('/', clienteController_1.default.index); // lista todos os clientes
//router.get('/:id', ClienteController.show); // pega cliente por ID
router.post('/', clienteController_1.default.create); // cria cliente
//# sourceMappingURL=cliente.js.map