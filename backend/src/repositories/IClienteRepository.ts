import { Cliente } from '@prisma/client';
import {
  CreateClienteInput,
  UpdateClienteInput,
} from '../validations/clientesSchema';

export interface IClienteRepository {
  create(data: CreateClienteInput): Promise<Cliente>;
  findAll(): Promise<Cliente[]>;

  find(query: { id: number }): Promise<Cliente | null>;
  find(query: { email: string }): Promise<Cliente | null>;
  find(query: { cpf: string }): Promise<Cliente | null>;

  update(id: number, data: UpdateClienteInput): Promise<Cliente>;
  deactivate(id: number): Promise<Cliente>;
}
