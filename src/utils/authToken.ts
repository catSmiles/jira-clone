import jwt from 'jsonwebtoken';

export const signToken = (payload: object): string =>
  jwt.sign(payload, 'development123', { expiresIn: '30 days' });
