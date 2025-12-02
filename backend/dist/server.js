"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const clienteRouter_1 = require("./routes/clienteRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/clientes', clienteRouter_1.clientesRouter);
// Rota de teste
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});
// Middleware para rotas não encontradas (404)
app.use((req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});
// Middleware de erro (precisa estar por último)
app.use((err, req, res, next) => {
    console.error('Erro capturado pelo middleware:', err.message);
    res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
});
app.listen(3001, () => {
    console.log('Servidor iniciado na porta 3001');
});
//# sourceMappingURL=server.js.map