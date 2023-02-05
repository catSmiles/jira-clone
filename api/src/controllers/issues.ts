import { Issue } from 'entities';
import { catchErrors } from 'errors';
import { createEntity, updateEntity, deleteEntity, findEntityOrThrow } from 'utils/typeorm';

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

export const getIssueWithUsersAndComments = catchErrors(async (req, res) => {
  const issue = await findEntityOrThrow(Issue, req.params.issueId, {
    // https://stackoverflow.com/questions/59031198/typeorm-how-to-get-relations-of-relations
    relations: ['users', 'comments', 'comments.user'],
  });
  res.respond({ issue });
});

export const create = catchErrors(async (req, res) => {
  const position = await calculatePosition(req.body);
  const issue = await createEntity(Issue, { ...req.body, position });
  res.respond({ issue });
});

export const update = catchErrors(async (req, res) => {
  const issue = await updateEntity(Issue, req.params.issueId, req.body);
  res.respond({ issue });
});

export const remove = catchErrors(async (req, res) => {
  const issue = await deleteEntity(Issue, req.params.issueId);
  res.respond({ issue });
});

const calculatePosition = async ({ projectId, status }: Issue): Promise<number> => {
  const issues = await Issue.find({ projectId, status });

  const positions = issues.map(({ position }) => position);

  if (positions.length > 0) {
    return Math.min(...positions) - 1;
  }
  return 1;
};
