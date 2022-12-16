import { Comment } from 'entities';
import { catchErrors } from 'errors/asyncCatch';
import { createEntity, deleteEntity } from 'utils/typeorm';

export const create = catchErrors(async (req, res) => {
  const comment = await createEntity(Comment, req.body);
  res.respond({ comment });
});

export const remove = catchErrors(async (req, res) => {
  const comment = await deleteEntity(Comment, req.params.commentId);
  res.respond({ comment });
});
