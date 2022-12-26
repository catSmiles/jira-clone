import { createConnection, Connection } from 'typeorm';

import { User, Comment, Project, Issue } from 'entities';

const createDatabaseConnection = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: [User, Comment, Project, Issue],
  });

export default createDatabaseConnection;

// type: 'postgres',
// host: 'localhost',
// port: 5432,
// username: 'postgres',
// password: 'PostgreSQL8143',
// database: 'jira_development',
