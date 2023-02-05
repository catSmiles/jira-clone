import { pick } from 'lodash';

import { Issue } from 'entities';

// _.pick(object, [paths]) - Creates an object composed of the picked object properties.
// Partial<Type>           - Constructs a type with all properties of Type set to optional...

export const issuePartial = (issue: Issue): Partial<Issue> =>
  pick(issue, [
    'id',
    'title',
    'type',
    'status',
    'priority',
    'position',
    'createdAt',
    'updatedAt',
    'userIds',
  ]);
