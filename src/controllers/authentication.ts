import { Request, Response } from 'express';

import createAccount from 'database/createGuestAccount';
import { signToken } from 'utils/authToken';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createGuestAccount = async (_req: Request, res: Response) => {
  const user = await createAccount();
  res.status(200).send({
    authToken: signToken({ sub: user.id }), // subject
  });
};
