import { z } from 'zod';

// Validação dos params
export const paramsSchema = z.object({
  id: z.string().min(1),
});

// Validação de query strings
export const querySchema = z.object({
  search: z.string().optional(),
});
