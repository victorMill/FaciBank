import { ConflictError, NotFoundError } from '../../errors/DomainError';
import { IClienteRepository } from '../../repositories/IClienteRepository';
import { UpdateClienteInput } from '../../validations/clientesSchema';

export class AtualizarClienteService {
  constructor(private readonly repo: IClienteRepository) {}

  async execute(data: UpdateClienteInput, id: number) {
    if (data.email)
      throw new ConflictError('Não é permitido alterar o e-mail de um cliente');
    if (data.cpf)
      throw new ConflictError('Não é permitido alterar o CPF de um cliente');

    const clienteExiste = this.repo.find({ id });

    if (!clienteExiste) throw new NotFoundError('Cliente não encontrado');

    return this.repo.update(id, data);
  }
}
