import { Cliente, Conta, TipoConta } from '@prisma/client';
import {
  CreateContaSchema,
  UpdateContasSchema,
} from '../validations/contasSchema';
import { IContaRepository } from './IContaRepository';
import { prisma } from '../lib/prisma';
import { NotFoundError } from '../errors/DomainError';

export class ContaRepository implements IContaRepository {
  async create(data: CreateContaSchema, cpf: string): Promise<Conta> {
    return prisma.$transaction(async (tx) => {
      const ultimaConta = await tx.conta.findFirst({
        orderBy: { numero: 'desc' },
      });
      const ultimoNumero = !ultimaConta ? '0' : ultimaConta.numero;

      const novoNumero = parseInt(ultimoNumero) + 1;

      const cliente = await prisma.cliente.findUnique({ where: { cpf } });
      if (!cliente) throw new NotFoundError('Cliente', { cpf });
      data.clienteId = cliente.id;

      return await tx.conta.create({
        data: {
          numero: novoNumero.toString(),
          tipoConta: data.tipoConta,
          clienteId: data.clienteId,
        },
      });
    });
  }
  update(data: UpdateContasSchema): Promise<Conta> {
    throw new Error('Method not implemented.');
  }

  async findByNumero(numero: string): Promise<Conta | null> {
    return await prisma.conta.findUnique({ where: { numero } });
  }

  async findByTipo(tipo: TipoConta): Promise<Conta[] | null> {
    return await prisma.conta.findMany({ where: { tipoConta: tipo } });
  }

  async findByCliente(cliente: string): Promise<Conta[] | null> {
    if (cliente != undefined)
      return await prisma.conta.findMany({
        where: {
          cliente: {
            nome: { contains: cliente, mode: 'insensitive' },
          },
        },
        include: { cliente: true },
      });

    throw new Error('find() requer id, email ou cpf');
  }

  findAll(): Promise<Conta[]> {
    throw new Error('Method not implemented.');
  }
  findAllTipo(tipo: string): Promise<Conta[]> {
    throw new Error('Method not implemented.');
  }
  close(id: number): Promise<Conta | null> {
    throw new Error('Method not implemented.');
  }
}
