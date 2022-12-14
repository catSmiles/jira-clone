import jwt from 'jsonwebtoken';
import { isPlainObject } from 'lodash';

import { InvalidTokenError } from 'errors/customErrors';

export const signToken = (payload: object): string =>
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30 days' });

export const verifyToken = (token: string): { [key: string]: any } => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (isPlainObject(payload)) {
      return payload as { [key: string]: any };
    }
    throw new Error();
  } catch (error) {
    throw new InvalidTokenError();
  }
};
