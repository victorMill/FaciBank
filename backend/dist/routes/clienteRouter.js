"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientesRouter = void 0;
const express_1 = require("express");
const clienteController_1 = __importDefault(require("../controllers/clienteController"));
const expressAdapter_1 = require("../utils/expressAdapter");
const validation_1 = require("../middlewares/validation");
const clientesSchema_1 = require("../validations/clientesSchema");
const expressSchemas_1 = require("../validations/expressSchemas");
const router = (0, express_1.Router)();
exports.clientesRouter = router;
router.get('/', (0, expressAdapter_1.adaptRoute)(clienteController_1.default.index)); // lista todos os clientes
router.get('/:id', (0, validation_1.validate)({ params: expressSchemas_1.paramsSchema }), clienteController_1.default.show); // pega cliente por ID
router.post('/', (0, validation_1.validate)({ body: clientesSchema_1.createClienteSchema }), (0, expressAdapter_1.adaptRoute)(clienteController_1.default.create)); // cria cliente
router.put('/:id', (0, validation_1.validate)({ body: clientesSchema_1.updateClienteSchema, params: expressSchemas_1.paramsSchema }), (0, expressAdapter_1.adaptRoute)(clienteController_1.default.update)); // atualiza cliente
router.delete('/:id', (0, validation_1.validate)({ params: expressSchemas_1.paramsSchema }), (0, expressAdapter_1.adaptRoute)(clienteController_1.default.delete)); // deleta cliente
//# sourceMappingURL=clienteRouter.js.map