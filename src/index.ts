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

  // use middleware
  app.use(express.json());

  // using Thunder Client run: http://localhost:3000/authentication/guest - with post method (To create data)
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
