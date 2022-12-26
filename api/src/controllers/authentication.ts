import createAccount from 'database/createGuestAccount';
import { signToken } from 'utils/authToken';
import { catchErrors } from 'errors/asyncCatch';

export const createGuestAccount = catchErrors(async (_req, res) => {
  const user = await createAccount();

  res.respond({
    authToken: signToken({ sub: user.id }),
  });
});
