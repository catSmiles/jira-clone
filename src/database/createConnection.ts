import { createConnection, Connection } from 'typeorm';

import { User } from 'entities';

const createDatabaseConnection = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'PostgreSQL8143',
    database: 'jira_development',
    synchronize: true,
    entities: [User],
  });

export default createDatabaseConnection;
