import { Project } from 'entities';
import { catchErrors } from 'errors/asyncCatch';
import { updateEntity, findEntityOrThrow } from 'utils/typeorm';
import { issuePartial } from 'serializers/issues';

// Imagine way to update Project enity?
// input: Project has change
// logic
// output: save Project and return

// Imagine way to using?
// how to update Project?
// need id and Project
// logic update
export const update = catchErrors(async (req, res) => {
  const project = await updateEntity(Project, req.currentUser.projectId, req.body);
  res.respond({ project });
});

// getProjectWithIssuesAndUsers
// Imagine getProjectWithIssuesAndUsers
export const getProjectWithIssuesAndUsers = catchErrors(async (req, res) => {
  const project = await findEntityOrThrow(Project, req.currentUser.projectId, {
    relations: ['issues', 'users'],
  });
  res.respond({
    project: {
      ...project,
      issues: project.issues.map(issuePartial),
    },
  });
});
