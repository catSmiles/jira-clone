import express from 'express';
import 'module-alias/register';

import createDatabaseConnection from 'database/createConnection';

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
  app.use(express.json());

  // start express server
  app.listen(3000);
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
