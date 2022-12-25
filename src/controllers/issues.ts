import { Issue } from 'entities';

import { catchErrors } from 'errors/asyncCatch';

import { createEntity, updateEntity, deleteEntity } from 'utils/typeorm';

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

// Imagine update Issue
// input: Issue, id, input
// logic:
// output: respond issue (updated)
export const update = catchErrors(async (req, res) => {
  const issue = await updateEntity(Issue, req.params.issueId, req.body);
  res.respond({ issue });
});

// Imagine remove Issue
// input: Issue, id
// logic
// output: Issue
export const remove = catchErrors(async (req, res) => {
  const issue = await deleteEntity(Issue, req.params.issueId);
  res.respond({ issue });
});

// getProjectIssues
// Imagine getProjectIssues working?
// getProjectIssue get what? where? why?
// ----------------------- *** ------------------------------------
// Hint docs: https://orkhan.gitbook.io/typeorm/docs/repository-api
// const users = await repository
//     .createQueryBuilder("user")
//     .where("user.name = :name", { name: "John" })
//     .getMany()
// ----------------------- *** ------------------------------------

// what? - It's projectId in currentUser
// where? - Issue
// Why? - getPorjectIssues :)
// input
// logic
// output

// Simple example of QueryBuilder:
// const issues = await Issue
//     .createQueryBuilder("user")
//     .select()
//     .where("
//        issue.projectId = :projectId
//        AND issue.title ILIKE :searchTerm
//        OR issue.descriptionText ILIKE :searchTerm",
//        { searchTerm: `%${searchTerm}%` })
//     .getMany()

// It builds the following SQL query:
// SELECT *
// FROM issue
// WHERE issue.projectId = `${projectId}` AND (issue.title ILIKE `%{searchTerm}%` OR issue.descriptionText ILKE `%${searchTerm}%`)

export const getProjectIssues = catchErrors(async (req, res) => {
  const { projectId } = req.currentUser;
  // search tearm meaning - A search term, otherwise known as a search query, is the word or phrase someone enters into a search engine, such as Google.
  const { searchTerm } = req.query;

  let whereSQL = 'issue.projectId = :projectId';

  if (searchTerm) {
    whereSQL += ' AND (issue.title ILIKE :searchTerm OR issue.descriptionText ILIKE :searchTerm)';
  }

  const issues = await Issue.createQueryBuilder('issue')
    .select()
    .where(whereSQL, { projectId, searchTerm: `%${searchTerm}%` })
    .getMany();

  res.respond({ issues });
});
