"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClienteSchema = exports.createClienteSchema = void 0;
// src/validations/cliente.ts
const zod_1 = require("zod");
const baseClienteSchema = zod_1.z.object({
    nome: zod_1.z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: zod_1.z.string().email('E-mail inválido'),
    cpf: zod_1.z.string().regex(/^\d{11}$/, 'CPF deve ter 11 dígitos'),
    saldo: zod_1.z.coerce.number().nonnegative('Saldo não pode ser negativo'),
});
// Create schema (all required, no extra fields allowed)
exports.createClienteSchema = baseClienteSchema.strict();
// Update schema (all fields optional, no extra fields allowed)
exports.updateClienteSchema = baseClienteSchema.partial().strict();
//# sourceMappingURL=clientesSchema.js.map