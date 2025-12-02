import {
  CreateClienteInput,
  createClienteSchema,
  UpdateClienteInput,
  updateClienteSchema,
} from '../validations/clientesSchema';
import { paramsSchema } from '../validations/expressSchemas';
import z from 'zod';
import { IClienteRepository } from '../repositories/IClienteRepository';
import { ClienteRepository } from '../repositories/ClienteRepository';
import { ControllerArgs } from '../utils/expressAdapter';
import { fail, success } from '../utils/apiResponse';
import { CriarClienteService } from '../services/clientes/CriarClienteServices';
import { AtualizarClienteService } from '../services/clientes';

type ParamsType = z.infer<typeof paramsSchema>;

class ClienteController {
  constructor(private readonly repo: IClienteRepository) {}

  create = async ({ body }: ControllerArgs & { body: CreateClienteInput }) => {
    const data = createClienteSchema.parse(body);
    const service = new CriarClienteService(this.repo);
    const cliente = await service.execute(data);
    return success(cliente, 'Cliente criado com sucesso');
  };

  index = async () => {
    const clientes = await this.repo.findAll();
    if (clientes.length === 0) {
      return fail('Nenhum cliente encontrado', 404);
    }
    return success(clientes, 'Clientes listados com sucesso');
  };

  show = async ({ params }: { params: ParamsType }) => {
    const cliente = await this.repo.find({ id: +params.id });
    return success(cliente, 'Cliente encontrado');
  };

  update = async ({
    body,
    params,
  }: {
    body: UpdateClienteInput;
    params: ParamsType;
  }) => {
    const data = updateClienteSchema.parse(body);
    const service = new AtualizarClienteService(this.repo);
    const clienteAtualizado = await service.execute(data, +params);
    return success(clienteAtualizado, 'Cliente atualizado com sucesso');
  };

  delete = async ({ params }: { params: ParamsType }) => {
    const clienteRemovido = await this.repo.deactivate(+params.id);
    return success(clienteRemovido, 'Cliente removido com sucesso');
  };
}

const ClienteRepo = new ClienteRepository();
export default new ClienteController(ClienteRepo);
