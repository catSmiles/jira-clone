import jwt from 'jsonwebtoken';

export const signToken = (payload: object): string =>
  jwt.sign(payload, 'development123', { expiresIn: '30 days' });

export const verifyToken = (token: string): { [key: string]: any } => {
  try {
    const payload = jwt.verify(token, 'development123');
    return payload as { [key: string]: any };
  } catch (e) {
    console.log(e);
    throw new Error();
  }
};
