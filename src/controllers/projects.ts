import { Project } from 'entities';
import { catchErrors } from 'errors/asyncCatch';
import { updateEntity } from 'utils/typeorm';

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
