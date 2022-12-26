import { RequestHandler } from 'express';

export const catchErrors = (requestHander: RequestHandler): RequestHandler => {
  return async (req, res, next): Promise<any> => {
    try {
      return await requestHander(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
