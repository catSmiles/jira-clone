import createAccount from 'database/createGuestAccount';
import { signToken } from 'utils/authToken';
import { catchErrors } from 'errors/asyncCatch';

export const createGuestAccount = catchErrors(async (_req, res) => {
  const user = await createAccount();
  res.status(200).send({
    authToken: signToken({ sub: user.id }), // subject
  });
});

// async (_req: Request, res: Response) => {
//   const user = await createAccount();
//   res.status(200).send({
//     authToken: signToken({ sub: user.id }), // subject
//   });
// };
