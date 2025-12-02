import { z, ZodError, ZodObject, ZodRawShape } from 'zod';
import { Request, Response, NextFunction } from 'express';

export interface reqSchema {
  body?: ZodObject<ZodRawShape>;
  params?: ZodObject<ZodRawShape>;
  query?: ZodObject<ZodRawShape>;
}

export function validate(schemas: reqSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schemas.body) await schemas.body.parseAsync(req.body);
      if (schemas.params) await schemas.params.parseAsync(req.params);
      if (schemas.query) await schemas.query.parseAsync(req.query);
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Erro de validação da request',
          errors: z.treeifyError(err),
        });
      }

      console.error('Erro inesperado no validate:', err);
      return res.status(500).json({
        success: false,
        message: 'Erro interno no middleware de validação',
      });
    }
  };
}
