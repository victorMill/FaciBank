export class DomainError extends Error {
  public readonly statusCode: number;
  public readonly context?: unknown;

  constructor(message: string, statusCode = 400, context?: unknown) {
    super(message);
    this.statusCode = statusCode;
    this.context = context;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends DomainError {
  constructor(resource: string, context?: unknown) {
    super(`${resource} não encontrado)`, 404, context);
  }
}

export class ConflictError extends DomainError {
  constructor(resource: string, context?: unknown) {
    super(`${resource} já existe)`, 409, context);
  }
}
