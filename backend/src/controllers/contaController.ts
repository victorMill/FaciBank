import { IContaRepository } from '../repositories/IContaRepository';
import { CreateContaSchema } from '../validations/contasSchema';

export class ContaController {
  constructor(private readonly repo: IContaRepository) {}
  async create(data: CreateContaSchema) {}
}
