import { createGuestAccount } from 'controllers/authentication';

export const attachPublicRoutes = (app: any): void => {
  app.post('/authentication/guest', createGuestAccount);
  // using Thunder Client run: http://localhost:3000/authentication/guest - with post method
};
