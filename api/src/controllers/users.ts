import { catchErrors } from 'errors/asyncCatch';

// Imagine logic get currentUser?
// Hint in Request I have define one currentuser (in types/express.d.ts). It's User has authentication
export const getCurrentUser = catchErrors((req, res) => {
  res.respond({ currentUser: req.currentUser });
});
