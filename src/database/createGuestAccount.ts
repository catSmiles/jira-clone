import { User, Project } from 'entities';
import { ProjectCategory } from 'constants/projects';

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
    createEntity(User, {
      name: 'Jerry',
      email: 'jerry@jira.guest',
      avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    }),
  ];
  return Promise.all(users);
};

const seedProject = (users: User[]): Promise<Project> =>
  createEntity(Project, {
    name: 'singularity 1.0',
    url: 'https://www.atlassian.com/software/jira',
    description:
      'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
    category: ProjectCategory.SOFTWARE,
    users,
  });

const createGuestAccount = async (): Promise<User> => {
  const users = await seedUsers(); // insert users into db - postgres
  await seedProject(users);

  return users[1];
};

export default createGuestAccount;
