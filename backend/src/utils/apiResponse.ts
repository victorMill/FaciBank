export function success<T>(data: T, message = 'Operação bem sucedida') {
  return {
    success: true,
    message,
    data,
  };
}

export function fail(message: string, statusCode = 400) {
  return {
    success: false,
    message,
    statusCode,
  };
}
