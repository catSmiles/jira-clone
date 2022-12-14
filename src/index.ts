import express from 'express';
import 'module-alias/register';
import 'dotenv/config';

import { addRespondToResponse } from 'middleware/response';
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

  app.use(addRespondToResponse);

  // using Thunder Client run: http://localhost:3000/authentication/guest - with post method (To create data)
  attachPublicRoutes(app);

  app.get('/', authenticateUser);

  // start express server
  app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
  });
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
