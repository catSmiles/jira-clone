import { createGuestAccount } from 'controllers/authentication';
import * as comments from 'controllers/comments';
import * as issues from 'controllers/issues';
import * as users from 'controllers/users';
import * as projects from 'controllers/projects';

export const attachPublicRoutes = (app: any): void => {
  app.post('/authentication/guest', createGuestAccount);
  // using Thunder Client run: http://localhost:3000/authentication/guest - with post method
};

export const attachPrivateRoutes = (app: any): void => {
  // comments
  app.post('/comments', comments.create);
  app.delete('/comments:commentId', comments.remove);
  app.post('/comments:commentId', comments.update);

  // issues
  app.post('/issues', issues.create);

  // project
  app.put('/project', projects.update);

  // currentUser
  // imagine way to using
  app.get('/currentUser', users.getCurrentUser);
};
