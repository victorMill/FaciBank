"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ClienteController {
    constructor() {
        this.create = async ({ body }) => {
            if (!body.saldo)
                body.saldo = 0;
            return prisma.cliente.create({ data: body });
        };
        this.index = async () => {
            const clientes = await prisma.cliente.findMany();
            if (clientes.length === 0) {
                return { message: 'Nenhum cliente encontrado.' };
            }
            return clientes;
        };
        this.show = async ({ params }) => {
            const cliente = await prisma.cliente.findUnique({
                where: { id: +params.id },
            });
            if (!cliente) {
                return { message: 'Nenhum cliente encontrado para o id informado.' };
            }
            return cliente;
        };
        this.update = async ({ body, params, }) => {
            const clienteAtualizado = await prisma.cliente.update({
                data: body,
                where: {
                    id: +params.id,
                },
            });
            if (!clienteAtualizado) {
                return { message: 'Nenhum cliente encontrado para o id informado.' };
            }
            return clienteAtualizado;
        };
        this.delete = async ({ params }) => {
            const clienteRemovido = await prisma.cliente.delete({
                where: { id: +params.id },
            });
            if (!clienteRemovido) {
                return { message: 'Nenhum cliente encontrado para o id informado.' };
            }
            return clienteRemovido;
        };
    }
}
exports.default = new ClienteController();
//# sourceMappingURL=clienteController.js.map