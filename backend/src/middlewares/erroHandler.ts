import { NextFunction, Request, Response } from 'express';
import { ZodError, z } from 'zod';
import { DomainError } from '../errors/DomainError';
import { Prisma } from '@prisma/client';

type PrismaError = { code: string };

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  // Erros de validação(Zod)
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Erro de validação',
      errors: z.treeifyError(err),
    });
  }
  //Erros de domínio (negócio)
  if (err instanceof DomainError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      context: err.context,
      statusCode: err.statusCode,
    });
  }

  // Erros do prisma (baixo nível)
  if (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    (err as PrismaError).code === 'P2002'
  ) {
    return res.status(409).json({
      success: false,
      message: 'Violação de unicidade (registro duplicado).',
    });
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).json({
      success: false,
      message: 'Erro de validação no banco de dados (campos inválidos).',
      details: err.message,
    });
  }

  //Erro inesperado (fallBack)
  console.log(err);
  return res.status(500).json({
    success: false,
    message: 'Erro interno do servidor',
    statusCode: 500,
  });
}
