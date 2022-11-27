import { createConnection, Connection } from 'typeorm';

const createDatabaseConnection = (): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'PostgreSQL8143',
    database: 'jira_development',
    synchronize: true,
    entities: [],
  });

export default createDatabaseConnection;
