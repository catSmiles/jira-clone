import express from 'express';
import 'module-alias/register';

import createDatabaseConnection from 'database/createConnection';
import { attachPublicRoutes } from 'routes';

import { authenticateUser } from 'middleware/authentication';

// establish database connection
const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
    console.log('db connect successful');
  } catch (e) {
    console.log(e);
  }
};

// initialize express
const initializeExpress = (): void => {
  // create and setup express app
  const app = express();
  app.use(express.json()); // use middleware

  attachPublicRoutes(app);

  app.get('/', authenticateUser);

  // start express server
  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
