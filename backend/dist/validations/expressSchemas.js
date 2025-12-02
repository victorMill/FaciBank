"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySchema = exports.paramsSchema = void 0;
const zod_1 = require("zod");
// Validação dos params
exports.paramsSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
});
// Validação de query strings
exports.querySchema = zod_1.z.object({
    search: zod_1.z.string().optional(),
});
//# sourceMappingURL=expressSchemas.js.map