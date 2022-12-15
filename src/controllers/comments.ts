import { Comment } from 'entities';
import { catchErrors } from 'errors/asyncCatch';
import { createEntity } from 'utils/typeorm';

export const create = catchErrors(async (req, res) => {
  const comment = await createEntity(Comment, req.body);
  res.respond({ comment });
});
