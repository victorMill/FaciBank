import { ConflictError } from '../../errors/DomainError';
import { IClienteRepository } from '../../repositories/IClienteRepository';
import { CreateClienteInput } from '../../validations/clientesSchema';

export class CriarClienteService {
  constructor(private readonly repo: IClienteRepository) {}

  async execute(data: CreateClienteInput) {
    //Garante que o cliente exista
    const clienteExiste = await this.repo.find({ email: data.email });

    if (clienteExiste)
      throw new ConflictError('Já existe um cliente com esse e-mail');

    const cliente = await this.repo.create(data);
    return cliente;
  }
}
