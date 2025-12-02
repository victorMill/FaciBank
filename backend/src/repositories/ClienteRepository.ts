import { Cliente } from '@prisma/client';
import { prisma } from '../lib/prisma';
import {
  CreateClienteInput,
  UpdateClienteInput,
} from '../validations/clientesSchema';
import { IClienteRepository } from './IClienteRepository';
import { ConflictError, NotFoundError } from '../errors/DomainError';

export class ClienteRepository implements IClienteRepository {
  private async ensureExists(id: number): Promise<Cliente> {
    const cliente = await prisma.cliente.findUnique({ where: { id } });
    if (!cliente) throw new NotFoundError('Cliente', { id });
    return cliente;
  }

  async create(data: CreateClienteInput): Promise<Cliente> {
    try {
      return prisma.cliente.create({ data });
    } catch (err: any) {
      if (err.code === 'P2002') {
        throw new ConflictError('Cliente com campos únicos', {
          target: err.meta?.target,
        });
      }
      throw err;
    }
  }

  async findAll(): Promise<Cliente[]> {
    return await prisma.cliente.findMany();
  }

  async find(query: { id: number }): Promise<Cliente | null>;
  async find(query: { email: string }): Promise<Cliente | null>;
  async find(query: { cpf: string }): Promise<Cliente | null>;

  async find(query: { id?: number; email?: string; cpf?: string }) {
    if (query.id != undefined) {
      return await prisma.cliente.findUnique({
        where: { id: query.id },
      });
    }
    if (query.email != undefined) {
      return await prisma.cliente.findUnique({
        where: { email: query.email },
      });
    }

    if (query.cpf != undefined) {
      return await prisma.cliente.findUnique({
        where: { cpf: query.cpf },
      });
    }

    throw new Error('find() requer id, email ou cpf');
  }

  async update(id: number, data: UpdateClienteInput): Promise<Cliente> {
    await this.ensureExists(id);
    return prisma.cliente.update({ where: { id }, data });
  }

  async deactivate(id: number): Promise<Cliente> {
    await this.ensureExists(id);
    return prisma.cliente.update({
      where: { id },
      data: { status: 'INATIVO' },
    });
  }
}
