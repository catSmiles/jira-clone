import { User } from 'entities';

import { createEntity } from 'utils/typeorm';

const seedUsers = (): Promise<User[]> => {
  const users = [
    createEntity(User, {
      name: 'John',
      email: 'john@jira.guest',
      avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
    }),
    createEntity(User, {
      name: 'Tom',
      email: 'tom@jira.guest',
      avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    }),
  ];
  return Promise.all(users);
};

const createGuestAccount = async (): Promise<User> => {
  const users = await seedUsers(); // insert users into db - postgres
  return users[1];
};

export default createGuestAccount;
