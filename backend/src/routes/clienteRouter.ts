import { Router } from 'express';
import ClienteController from '../controllers/clienteController';
import { adaptRoute } from '../utils/expressAdapter';
import { validate } from '../middlewares/validation';
import {
  createClienteSchema,
  updateClienteSchema,
} from '../validations/clientesSchema';
import { paramsSchema } from '../validations/expressSchemas';

const router = Router();

// lista todos os clientes
router.get('/', adaptRoute(ClienteController.index));

// pega cliente por ID
router.get(
  '/:id',
  validate({ params: paramsSchema }),
  adaptRoute(ClienteController.show),
);

// cria cliente
router.post(
  '/',
  validate({ body: createClienteSchema }),
  adaptRoute(ClienteController.create),
);

// atualiza cliente
router.put(
  '/:id',
  validate({ body: updateClienteSchema, params: paramsSchema }),
  adaptRoute(ClienteController.update),
);

// deleta cliente
router.delete(
  '/:id',
  validate({ params: paramsSchema }),
  adaptRoute(ClienteController.delete),
);

export { router as clientesRouter };
