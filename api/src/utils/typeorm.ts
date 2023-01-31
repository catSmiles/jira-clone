import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { User, Project, Issue, Comment } from 'entities';

import { generateErrors } from 'utils/validation';
import { BadUserInputError, EntityNotFoundError } from 'errors/customErrors';

type EntityInstance = User | Project | Issue | Comment;
type EntityConstructor = typeof User | typeof Project | typeof Issue | typeof Comment;

const entities: { [key: string]: EntityConstructor } = { User, Project, Issue, Comment };

// imagine action validation before when save entity?
// input: entity
// logic: check validation if have error message throw error, otherwire execute action save entity
// output: if error throw info error, Otherwise execute action save entity
const validateAndSaveEntity = <T extends EntityInstance>(instance: T): Promise<T> => {
  // how to known what is Constructor (name entity)?
  const Constructor = entities[instance.constructor.name];
  // get field validation in Constructor
  if ('validations' in Constructor) {
    // imagine way get errorFields through?
    const errorFields = generateErrors(instance, Constructor.validations);
    // how to known have many error fields?
    if (Object.keys(errorFields).length > 0) {
      throw new BadUserInputError({ fields: errorFields });
    }
  }
  return instance.save() as Promise<T>;
};

// export const saveEntity = async <T extends EntityInstance>(instance: T): Promise<T> => {
//   return instance.save() as Promise<T>;
// };

// create entity
export const createEntity = async <T extends EntityConstructor>(
  Constructor: T,
  input: Partial<InstanceType<T>>,
): Promise<InstanceType<T>> => {
  const instance = Constructor.create(input);
  // return saveEntity(instance as InstanceType<T>);
  return validateAndSaveEntity(instance as InstanceType<T>);
};

// delete entity
export const deleteEntity = async <T extends EntityConstructor>(
  Constructor: T,
  id: number | string,
): Promise<InstanceType<T>> => {
  const instance = await findEntityOrThrow(Constructor, id);
  await instance.remove();
  return instance;
};

// update entity
// imagine update entity
// input: id, entity, input (userInput)
// logic: find enity. if true update enity, otherwise through error
// output: update entity, otherwise through error
export const updateEntity = async <T extends EntityConstructor>(
  Constructor: T,
  id: number | string,
  input: Partial<InstanceType<T>>,
): Promise<InstanceType<T>> => {
  const instance = await findEntityOrThrow(Constructor, id);
  Object.assign(instance, input);
  return validateAndSaveEntity(instance);
};

// imagine findEntityOrThrow
// input: Constructor, id
// logic if find instance is true return instance, otherwise throw error
// output: instance or throw error
export const findEntityOrThrow = async <T extends EntityConstructor>(
  Constructor: T,
  id: number | string,
  options?: FindOneOptions,
): Promise<InstanceType<T>> => {
  const instance = await Constructor.findOne(id, options);
  if (!instance) {
    throw new EntityNotFoundError(Constructor.name);
  }
  return instance;
};
