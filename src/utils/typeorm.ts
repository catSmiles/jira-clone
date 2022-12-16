import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { User, Project, Issue, Comment } from 'entities';

type EntityInstance = User | Project | Issue | Comment;
type EntityConstructor = typeof User | typeof Project | typeof Issue | typeof Comment;

export const saveEntity = async <T extends EntityInstance>(instance: T): Promise<T> => {
  return instance.save() as Promise<T>;
};

// create entity
export const createEntity = async <T extends EntityConstructor>(
  Constructor: T,
  input: Partial<InstanceType<T>>,
): Promise<InstanceType<T>> => {
  const instance = Constructor.create(input);
  return saveEntity(instance as InstanceType<T>);
};

// delete entity
export const deleteEntity = async <T extends EntityConstructor>(
  Constructor: T,
  id: number | string,
  option?: FindOneOptions,
): Promise<InstanceType<T>> => {
  const instance = await Constructor.findOne(id, option);
  await instance.remove();
  return instance;
};
