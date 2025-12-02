import { RequestHandler } from 'express';

export type ControllerArgs = {
  body?: any;
  params?: any;
  query?: any;
};

export function adaptRoute<T extends ControllerArgs>(
  controllerFn: (args: T) => Promise<any>,
): RequestHandler {
  return async (req, res, next) => {
    try {
      const result = await controllerFn({
        body: req.body,
        params: req.params,
        query: req.query,
      } as T);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
}
