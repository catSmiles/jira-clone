import { verifyToken } from 'utils/authToken';
import { User } from 'entities';
import { catchErrors } from 'errors/asyncCatch';

export const authenticateUser = catchErrors(async (req, _res, next) => {
  const authHeader = req.get('authorization') || '';

  const [, token] = authHeader.split(' ');

  if (!token) {
    throw new Error('Authentication token not found.');
  }

  const userId = verifyToken(token).sub;
  if (userId) {
    throw new Error('Authentication token is invalid');
  }

  const user = await User.findOne(userId);

  if (!user) {
    throw new Error('Authentication token is invalid: User not found.');
  }

  req.currentUser = user;
  next();
});

// async (req: Request, next: any): Promise<any> => {
//   const authHeader = req.get('authorization') || '';

//   const token = authHeader && authHeader.split(' ')[1];
//   console.log({ authHeader, token });

//   if (!token) {
//     throw new Error('Authentication token not found.');
//   }

//   const userId = verifyToken(token).sub;

//   console.log(userId);

//   if (!userId) {
//     throw new Error('Authentication token is invalid.');
//   }

//   const user = await User.findOne(userId);

//   if (!user) {
//     throw new Error('Authentication token is invalid: User not found.');
//   }
//   req.currentUser = user;
//   next();
// };
