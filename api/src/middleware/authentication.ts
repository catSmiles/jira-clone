import { Request } from 'express';

import { verifyToken } from 'utils/authToken';
import { catchErrors } from 'errors/asyncCatch';
import { InvalidTokenError } from 'errors/customErrors';
import { User } from 'entities';

export const authenticateUser = catchErrors(async (req, _res, next) => {
  const token = getAuthTokenFromRequest(req);
  console.log({ token });

  if (!token) {
    throw new InvalidTokenError('Authentication token not found.');
  }

  const userId = verifyToken(token).sub;
  if (!userId) {
    throw new InvalidTokenError('Authentication token is invalid.');
  }

  const user = await User.findOne(userId);

  if (!user) {
    throw new InvalidTokenError('Authentication token is invalid: User not found.');
  }

  req.currentUser = user;
  next();
});

const getAuthTokenFromRequest = (req: Request): string | null => {
  const authHeader = req.get('Authorization') || '';
  const [bearer, token] = authHeader.split(' ');
  return bearer === 'Bearer' && token ? token : null;
};
