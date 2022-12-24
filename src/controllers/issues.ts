import { Issue } from 'entities';

import { catchErrors } from 'errors/asyncCatch';

import { createEntity, updateEntity } from 'utils/typeorm';

export const create = catchErrors(async (req, res) => {
  const listPosition = await caculatePosition(req.body);
  const issue = await createEntity(Issue, { ...req.body, position: listPosition });
  res.respond({ issue });
});

// caculatePosition
const caculatePosition = async ({ projectId, status }: Issue): Promise<number> => {
  const issues = await Issue.find({ projectId, status });
  const listPositions = issues.map(({ position }) => position);
  if (listPositions.length > 0) {
    return Math.min(...listPositions) - 1;
  }
  return 1;
};

// Image update Issue
// input: Issue, id, input
// logic:
// output: respond issue (updated)
export const update = catchErrors(async (req, res) => {
  const issue = await updateEntity(Issue, req.params.issueId, req.body);
  res.respond({ issue });
});
