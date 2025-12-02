import { Conta, TipoConta } from '@prisma/client';
import {
  CreateContaSchema,
  UpdateContasSchema,
} from '../validations/contasSchema';

export interface IContaRepository {
  create(data: CreateContaSchema, cpf: string): Promise<Conta>;
  update(data: UpdateContasSchema): Promise<Conta>;
  findByNumero(numero: string): Promise<Conta | null>;
  findByCliente(cliente: string): Promise<Conta[] | null>;
  findByTipo(tipo: TipoConta): Promise<Conta[] | null>;
  findAll(): Promise<Conta[] | null>;
  close(id: number): Promise<Conta | null>;
}
