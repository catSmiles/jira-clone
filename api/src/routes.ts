import { createGuestAccount } from 'controllers/authentication';
import * as comments from 'controllers/comments';
import * as issues from 'controllers/issues';
import * as users from 'controllers/users';
import * as projects from 'controllers/projects';

export const attachPublicRoutes = (app: any): void => {
  app.post('/authentication/guest', createGuestAccount);
  // using Thunder Client run: http://localhost:3032/authentication/guest - with post method
};

export const attachPrivateRoutes = (app: any): void => {
  // comments
  app.post('/comments', comments.create);
  app.put('/comments/:commentId', comments.update);
  app.delete('/comments/:commentId', comments.remove);

  // issues
  app.get('/issues', issues.getProjectIssues);
  app.get('/issues/:issueId', issues.getIssueWithUsersAndComments);
  app.post('/issues', issues.create);
  app.put('/issues/:issueId', issues.update);
  app.delete('/issues/:issueId', issues.remove);

  // project
  app.get('/project', projects.getProjectWithIssuesAndUsers);
  app.put('/project', projects.update);

  // currentUser
  // imagine way to using
  app.get('/currentUser', users.getCurrentUser);
};
