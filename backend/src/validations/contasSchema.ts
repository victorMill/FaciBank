import z from 'zod';

export const createContaSchema = z
  .object({
    tipoConta: z.enum(['CORRENTE', 'POUPANCA']),
    clienteId: z.number(),
  })
  .strict();

export type CreateContaSchema = z.infer<typeof createContaSchema>;

export const updateContasSchema = z.object({
  status: z.enum(['ATIVA', 'INATIVA']),
});

export type UpdateContasSchema = z.infer<typeof updateContasSchema>;
