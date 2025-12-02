// validations/clientesSchema.ts
import { z } from 'zod';

export const baseClienteSchema = z.object({
  nome: z.string().min(3),
  nascimento: z.coerce
    .date()
    .refine((d) => d < new Date(), 'Data de nascimento não pode ser no futuro'),
  telefone: z.string(),
  endereco: z.string(),
  email: z.email(),
  cpf: z.string().length(11),
  senha: z.string().min(4),
});

// Create schema (all required, no extra fields allowed)
export const createClienteSchema = baseClienteSchema.strict();

// Update schema (all fields optional, no extra fields allowed)
export const updateClienteSchema = baseClienteSchema.partial().strict();

export type CreateClienteInput = z.infer<typeof createClienteSchema>;
export type UpdateClienteInput = z.infer<typeof updateClienteSchema>;
